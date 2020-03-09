// Import React, useEffect, and useState
import React, { useEffect, useState } from "react";
// import styled components
import styled from "styled-components";

const Card = styled.div`
    width: 30%;
    margin: 1%;
    position: relative;
    border-radius: 0.4rem;
    background-color: white;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
    &:hover {
        bottom: .5rem;
        background-color:  rgba(66, 135, 245, 0.863);
        background-image: url(./img/Logo.jpg);
        transform: rotateY(180deg);
    }
`;
const PersonCard = props => {
    return (
        <Card>
            <h2>{props.name}</h2>
            <h5>A little about "{props.name}"</h5>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Skin Color: {props.skinColor}</p>
            <p>Eye Color: {props.eyeColor}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Gender: {props.gender}</p>
            <p>Films: {props.films}</p>
            <p>Starships: {props.starships}</p>
        </Card>
    );
};
export default PersonCard;