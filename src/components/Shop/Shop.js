import React from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import { useState } from 'react';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1>this is shop</h1>
                <h3>{ products.length }</h3>
                <ul>
                    {products.map( product => <li> {product.name} </li>)}
                </ul>
            </div>

            <div className="cart-container">
                <h1>this is cart</h1>
            </div>
           
        </div>
    );
};

export default Shop;