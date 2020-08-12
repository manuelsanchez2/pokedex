import React from "react";
// si no importamos React no podemos hacer un componente

function List(props) {
    return <nav>{props.children}</nav>
}


export default List;