import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { img, name,seller,price,stock, key } = props.product;
    console.log(props);
    return (
        <div className="single-product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name"> <Link to = {"/product/"+key}> {name} </Link> </h4>
                <br/>
                <p>by:{seller}</p>
                <br/>
                <p>${price}</p>
                <p><small>only {stock} left in stock-order soon</small></p>
                { props.showAddToCart && <button className="main-button"
                onClick={ ()=> props.handleAddProduct(props.product)}
                > <FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;