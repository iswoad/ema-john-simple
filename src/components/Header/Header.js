import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const header = () => {
    return (
        <div class='header'>
           <img src={logo} alt=""/>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Order Value</a>
               <a href="/manage">Manage Inventory</a>
               </nav>
        </div>
    );
};

export default header;