import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Navigationbar from '../Components/Navigationbar/Navigationbar';


const Main = () => {
    return (
        <div>
             <Navigationbar></Navigationbar>
            <Container>
           
            <Header></Header>
            </Container>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;