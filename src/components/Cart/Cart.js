import React from 'react';

import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(props)

    //const total = cart.reduce(( total, prd) => total + prd.price , 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if(total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99
    }

    const tax = total / 10;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)} </p>
            <p>Shipping cost: {formatNumber(shipping)} </p>
            <p> <small>tax+vat:{formatNumber(tax)}</small></p>
            <p>Grand Total: { formatNumber(total + shipping + tax) } </p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;