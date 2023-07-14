import RestrorantCard from "./RestrorantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //state variable=>super power variables

  const [ListofRestrorants, setListofRestrorants] = useState([]);
  const [filteredRestorant, setFilteredRestrorant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await Data.json();
    console.log(json);
    //optional chaning
    setListofRestrorants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestrorant(json?.data?.cards[2]?.data?.data?.cards);
  };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return (
      <h1>Looks Like You're offline!! Please Check Your internet Connection</h1>
    );

  return ListofRestrorants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4 p-4 body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 rounded-lg bg-gray-100 m-4" 
            onClick={() => {
              console.log(searchText);
              const filteredRestorant = ListofRestrorants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestrorant(filteredRestorant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 rounded-lg bg-gray-100 m-4"
            onClick={() => {
              const filteredList = ListofRestrorants.filter(
                (res) => res.data.avgRating > 4
              );
              setListofRestrorants(filteredList);
            }}
          >
            Top Rated restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestorant.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            <RestrorantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
