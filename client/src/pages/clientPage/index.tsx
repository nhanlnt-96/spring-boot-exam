import HeaderComponent from 'components/headerComp';
import React from 'react';
import {Outlet} from 'react-router-dom';

const ClientPage = () => {
    return (
        <div className='w-full'>
            <HeaderComponent/>
            <div className='w-full bg-black'>
                <Outlet/>
            </div>
        </div>
    );
};

export default ClientPage;