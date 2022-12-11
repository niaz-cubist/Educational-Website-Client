import React from 'react';
import Header from '../Routes/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Routes/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;