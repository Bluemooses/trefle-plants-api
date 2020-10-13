import React from "react";
import "./SearchInput.scss";
const SearchInput = (props) => {
  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
      function={props.function}
    >
      {props.text}
    </input>
  );
};

export default SearchInput;
