import React, { useState } from "react";
import "./SearchInput.css";

function SearchInput(props) {
  const [value, setValue] = useState("Hallo Manu");

  return (
    <input
      className="searchInput"
      placeholder="Enter name"
      value={value}
      onChange={(event) => setValue(event.target.value.trim())}
    />
  );
}

export default SearchInput;
