import React from "react";
import "./ListItemText.css"

function ListItemText({primary, secondary}) {
    return (
        <div className="listItemText">
            <span>{primary}</span>
            <span>{secondary}</span>
        </div>   
    )
}

export default ListItemText;