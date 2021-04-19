import React from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import { useState } from 'react';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) =>{
        const tobeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === tobeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity+1;
            sameProduct.quantity = count;
            const others = cart.filter( pd => pd.key !== tobeAddedKey);
            newCart = [...others, sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart) 
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className='twin-container'>
            <div className="product-container">
                <ul>    
                    {products.map( pd => <Product 
                    showAddToCart = {true}
                    product = {pd}
                    handleAddProduct = {handleAddProduct}
                    >
                    </Product>)}
                </ul>
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;