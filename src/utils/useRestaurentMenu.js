import fetch from "cross-fetch";
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { json } from "react-router-dom";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurentMenu;
