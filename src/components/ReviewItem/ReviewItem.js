import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity, key, price} = props.product;
    const revieItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        padding: '10px',
        marginLeft: '10px'
    }
    return (
        <div style={revieItemStyle}>
            <h3>{name}</h3>
            <h4>Quantity: {quantity}</h4>
            <p><small> ${price} </small></p>
            <button className = "main-button"
            onClick = {() => props.removeItem(key)}> Remove </button>
        </div>
    );
};

export default ReviewItem;