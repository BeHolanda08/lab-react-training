import React from 'react';
import idCard from './idCard.css';

const Cards = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="idCard">
            <img src={picture} alt="img" />
            <div>
                <ul>
                    <li><b>FirstName: </b>{firstName}</li>
                    <li><b>lastName: </b>{lastName}</li>
                    <li><b>gender: </b>{gender}</li>
                    <li><b>height: </b>{height}</li>
                    <li><b>birth: </b>{birth.getDate()}/{birth.getMonth() + 1}/{birth.getFullYear()}</li>
                </ul>
            </div>
        </div>
    )
}

export default Cards;
