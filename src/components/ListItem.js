import "./ListItem.css";
import React from "react";
// si no importamos React no podemos hacer un componente

function ListItem(props) {
    return <a className="listItem" href = {props.href}>{props.children}</a>
}

export default ListItem;