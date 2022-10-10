import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Navigationbar from '../Components/Navigationbar/Navigationbar';


const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;