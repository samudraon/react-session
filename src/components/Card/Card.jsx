import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props.item);
    const { action, img, name, price } = props.item;

    return (
        <div>
            <img className="w-96" src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default Card;