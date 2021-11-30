import React from "react";
import SearchIcon from "@material-ui/icons/Search";
function Search({ findKey, setFindKey }) {
  return (
    <div className="topActionRight">
      <SearchIcon />
      <input
        type="text"
        className="searchInput"
        placeholder="Rechercher"
        value={findKey}
        onChange={(event) => setFindKey(event.target.value)}
      />
    </div>
  );
}

export default Search;
