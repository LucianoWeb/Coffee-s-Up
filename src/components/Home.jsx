import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Discover from './Home/Discover';
import Gallery from './Home/Gallery';
import MainHome from './Home/MainHome';
import Where from './Home/Where';



const Home = () => {
  
    const location2 = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location2]);
    return (
        <>
            <MainHome />
            <Discover/>
            <Gallery/>
            <Where/>
            
        </>
    );
}


export default Home;