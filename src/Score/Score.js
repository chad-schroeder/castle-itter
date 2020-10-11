import React from 'react';

const Score = ({ score, award, victory }) => {
    return (
        <>
            <h1>{victory}</h1>
            {award  && <h2>{award}</h2>}
            <p>Score: {score}</p>
        </>
    );
};

export default Score;
