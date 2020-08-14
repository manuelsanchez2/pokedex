import React from 'react';

function PokeButton({onClick, children}) {
    return (
        <button onClick={onClick}>{children}</button> 
    );
}

export default PokeButton;