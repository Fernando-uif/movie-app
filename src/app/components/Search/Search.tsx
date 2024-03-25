import React from "react";
import inputStyle from "@/sass/components/search.module.scss";
import Icon from "../icons/Icon";
const Search = () => {
  return (
    <>
      <div className={`${inputStyle["search__wrapperSearch"]}`}>
        <Icon name="search" className={`${inputStyle["search__icon"]}`} />
        <input
          type="text"
          className={`${inputStyle["search"]}`}
          placeholder="Search for movies or TV series"
        />
      </div>
    </>
  );
};

export default Search;
