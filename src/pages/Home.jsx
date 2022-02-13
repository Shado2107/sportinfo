import React from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <div className="site-wrap">
                 <Header/>  
                 <Content/>
                 
                 <Footer/>   
            </div> 
        </>
    );
};

export default Home;