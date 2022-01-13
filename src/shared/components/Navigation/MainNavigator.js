import React , { useState} from 'react'
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import './MainNavigator.css'
import NavLinks from './NavLinks';
import SlideDrawer from './SlideDrawer';
import Backdrop from '../UIElements/Backdrop';
const MainNavigator = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
        <React.Fragment>
        { drawerIsOpen && (<Backdrop onClick={closeDrawerHandler} />) }
        <SlideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className='main-navigation__drawer-nav' >
                <NavLinks />
            </nav>
        </SlideDrawer> 
        <MainHeader >
            <button className='main-navigation__menu-btn' onClick={openDrawerHandler}> 
                <span />
                <span />
                <span />
            </button>
            <h1 className='main-navigation__title'>
               <Link to='/'>
                    Your places
               </Link> 
            </h1>
            <nav className='main-navigation__header-nav'>
                <NavLinks />
            </nav>
        </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigator;
