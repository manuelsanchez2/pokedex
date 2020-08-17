import "./ListItem.css";
import React from "react";
import { Link } from "react-router-dom";
// si no importamos React no podemos hacer un componente

function ListItem({ href, children }) {
  return (
    <Link className="listItem" to={href}>
      {children}
    </Link>
  );
}

export default ListItem;
