import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity, key} = props.product;
    const revieItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        padding: '10px',
        marginLeft: '10px'
    }
    return (
        <div style={revieItemStyle}>
            <h2>{name}</h2>
            <h3>Quantity: {quantity}</h3>
            <button className = "main-button"
            onClick = {() => props.removeItem(key)}> Remove </button>
        </div>
    );
};

export default ReviewItem;