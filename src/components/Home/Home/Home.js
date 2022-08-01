import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import ReserveParty from '../ReserveParty/ReserveParty';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallary></Gallary>
            <ReserveParty></ReserveParty>
        </div>
    );
};

export default Home;