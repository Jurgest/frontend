import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import {useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import './PlaceForm.css';


const DUMMY_PLACES = [
    {
        id:'p1',
        title: 'Empire State B',
        description: 'build in NYC, famous building',
        imageUrl: 'https://images.adsttc.com/media/images/5bad/284c/f197/cc8d/7400/003a/large_jpg/01_Ancient-Roman-Empire-State-Building.jpg?1538074693',
        address: 'New York, NY 10001, USA',
        creator: 'u1',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        }
    },
    {
        id:'p2',
        title: 'Empire State B',
        description: 'build in NYC, famous building',
        imageUrl: 'https://images.adsttc.com/media/images/5bad/284c/f197/cc8d/7400/003a/large_jpg/01_Ancient-Roman-Empire-State-Building.jpg?1538074693',
        address: 'New York, NY 10001, USA',
        creator: 'u2',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        }
    }
    ];


const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;


    const [formState, inputHandler, setFormData ]= useForm({ 
        title: {
            value: '',
            isValid: false
          },
    description: {
            value: '',
            isValid: false
         }
        }, false);

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

        useEffect(() => {
          if (identifiedPlace) {

            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
            description: {
                    value: identifiedPlace.description,
                    isValid: true
                }

            }, true);
        }
        setIsLoading(false);
        }, [setFormData, identifiedPlace])

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if(!identifiedPlace) {
        return <div className='center'>
            <Card>
                <h2>could not find place!</h2>
            </Card>
        </div>
    }
    if(isLoading) {
        return <div className='center'>
            <h2>Loading..</h2>
        </div>
    }

    return (

        <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input 
                id='title' 
                element='input' 
                type='text' 
                label='Title' 
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title'
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input 
                id='description' 
                element='input' 
                label='Description' 
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a valid description min 5'
                onInput={ inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type='submit' disabled={!formState.isValid}>UPDATE PLACE</Button>
        </form>
        
    )
}

export default UpdatePlace;
