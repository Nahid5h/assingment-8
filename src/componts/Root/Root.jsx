import React from 'react';
import Navber from '../Nabber/Navber';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container mx-auto py-6'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;