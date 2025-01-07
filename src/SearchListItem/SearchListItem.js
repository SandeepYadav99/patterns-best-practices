import React, { useRef, useState } from "react";

const SearchListItem = ({ items, keyFuncItem, children }) => {
  const lastChange = useRef();
  const [searchItem, setSearchItem] = useState("");

  const filterResult = items?.filter((item) =>
    JSON.stringify(item).toLowerCase()?.includes(searchItem.toLowerCase())
  );

  const changeHandler = (event) => {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchItem(event.target.value);
    }, 1000);
  };

  return (
    <div>
      <input type="search" placeholder="Search" className="input-filed" onChange={changeHandler} />
      <ul className="list">
        {filterResult?.map((item) => (
          <li key={keyFuncItem(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchListItem;
