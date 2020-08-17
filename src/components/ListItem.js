import "./ListItem.css";
import React from "react";
import { Link } from "react-router-dom";
// si no importamos React no podemos hacer un componente

function ListItem({ to, children }) {
  return (
    <Link className="listItem" to={to}>
      {children}
    </Link>
  );
}

export default ListItem;
