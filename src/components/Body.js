import { RestroCard, withPromotedLabel } from "./RestroCard";
import { Shimmer } from "./Shimmer";
import { useEffect, useState } from "react";
import { SWIGGYAPI } from "../utils/Constants";
import { Link } from "react-router-dom";
import Search from "./Search";

const RestroCardPromoted = withPromotedLabel(RestroCard);

export const Body = ({isSearched}) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGYAPI);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setOriginalData(restaurants);
    setData(restaurants);
  };

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      {isSearched && <Search originalData={originalData} data={data} setData={setData} />}
      <div className="flex flex-wrap mx-16 p-4">
        {data.map((res) => (
          <Link to={"/restaurants/" + res?.info?.id} key={res?.info?.id}>
            {res?.info?.avgRating >= 4.3 ? (
              <RestroCardPromoted resData={res?.info} />
            ) : (
              <RestroCard resData={res?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
