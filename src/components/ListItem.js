import "./ListItem.css";
import React from "react";
// si no importamos React no podemos hacer un componente

function ListItem({ href, children }) {
    return <a className="listItem" href = {href}>{children}</a>
}

export default ListItem;