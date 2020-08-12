import React from "react";

function ListItemText(props) {
    return (
        <div>
            <h3>{props.primary}</h3>
            <p>{props.secondary}</p>
        </div>   
    )
}

export default ListItemText;