import React from "react";
import {useState } from "react";

const Search = ({originalData, data, setData}) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div className="flex mx-16 m-2 p-2">
        <input
          type="text"
          className="w-3/12 rounded-[7px] border bg-transparent border-solid border-gray-500 px-3 py-2.5 font-sans text-sm font-normal focus:border-2 focus:border-blue-200"
          name="Delicious food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <button
          className="text-lg"
          onClick={() => {
            !isFiltered
              ? setData(
                  data.filter((x) =>
                    x?.info?.name
                      ?.toLowerCase()
                      ?.includes(searchText?.toLowerCase())
                  )
                )
              : setData(originalData);
            setIsFiltered(!isFiltered);
          }}
        >
          🔎
        </button>
      </div>
      <div className="flex mx-16 m-2 p-2">
        <button
          className="rounded-[7px] m-2 border bg-transparent px-3 py-2.5 font-sans text-sm font-normal focus:border-2 focus:border-blue-200"
          onClick={() => {
            !isFiltered
              ? setData(data.filter((x) => x?.info?.avgRating >= 4.3))
              : setData(originalData);
            setIsFiltered(!isFiltered);
          }}
        >
          Top Rated
        </button>
        <button
          className="rounded-[7px] m-2 border bg-transparent px-3 py-2.5 font-sans text-sm font-normal focus:border-2 focus:border-blue-200"
          onClick={() => {
            !isFiltered
              ? setData(data.filter((x) => x?.info?.veg == true))
              : setData(originalData);
            setIsFiltered(!isFiltered);
          }}
        >
          Veg
        </button>
      </div>
    </div>
  );
};

export default Search;
