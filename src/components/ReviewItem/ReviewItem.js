import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity} = props.product;
    return (
        <div>
            <h2>{name}</h2>
            <h3>Quantity: {quantity}</h3>
        </div>
    );
};

export default ReviewItem;