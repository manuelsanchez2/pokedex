import React from "react";
import "./ListItemText.css"

function ListItemText({primary, secondary}) {
    return (
        <div className="listItemText">
            <h3>{primary}</h3>
            <p>{secondary}</p>
        </div>   
    )
}

export default ListItemText;