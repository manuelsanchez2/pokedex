import React from "react";
import { useParams } from "react-router-dom";

function Pokemon(props) {
  const { name } = useParams();
  return <div>{name}</div>;
}

export default Pokemon;
