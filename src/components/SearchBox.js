import React from "react";

const SearchBox = ({ handleSearch }) => {
  return (
    <div className="pa2">
      <input
        placeholder="search robots"
        className="bg-lightest-blue ba b--green pa3 "
        type={"text"}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
