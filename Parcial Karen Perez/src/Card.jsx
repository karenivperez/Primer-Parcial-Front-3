import React from 'react';

const Card = ({ inf1, inf2 }) => {
    return (
        <div className="card">
            <h2>Los nombres elegidos son:</h2>
            <p>Puesto 1: {inf1}</p>
            <p>Puesto 2: {inf2}</p>
        </div>
    );
};

export default Card;