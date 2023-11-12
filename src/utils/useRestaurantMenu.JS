import { SWIGGYMENUAPI } from "../utils/Constants";
import { useEffect, useState } from "react";

// Custom Hook

export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGYMENUAPI + resId);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};
