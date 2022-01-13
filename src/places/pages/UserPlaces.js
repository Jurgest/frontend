import React from 'react'
import { useParams } from 'react-router';


import PlaceList from '../components/PlaceList';

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

const UserPlaces =props=> {
    const userId = useParams().userId;



    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator=== userId)
    return (
        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces;
