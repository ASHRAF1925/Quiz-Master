import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';

import Navigationbar from '../Components/Navigationbar/Navigationbar';


const Main = () => {
    return (
        <div className='container'>
             <Navigationbar></Navigationbar>
            <Container>
           
         
            </Container>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;