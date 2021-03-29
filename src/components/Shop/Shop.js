import React from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import { useState } from 'react';
import Product from '../Product/Product'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) =>{
        console.log('added', product)
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>    
                    {products.map( pd => <Product 
                    product = {pd}
                    handleAddProduct = {handleAddProduct}
                    >
                    </Product>)}
                </ul>
            </div>

            <div className="cart-container">
                <h1>this is cart</h1>
                <h5>Order Summary: {cart.length}</h5>
            </div>
           
        </div>
    );
};

export default Shop;