import React from 'react';
import Card from './Card'

const Cards = ({ }) => {
    return (
        <div className="card-deck">
            <Card image1={"./data/image1.jpg"}/>
            <Card image1={"./data/image1.jpg"}/>
            <Card image1={"./data/image1.jpg"}/>
            <Card image1={"./data/image1.jpg"}/>
        </div>
    );
}

export default Cards;