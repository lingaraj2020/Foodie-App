import RestrorantCard, { withPromotedLabel } from "./RestrorantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";

const Body = () => {
  //state variable=>super power variables

  const [ListofRestrorants, setListofRestrorants] = useState([]);
  const [filteredRestorant, setFilteredRestrorant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromtoted = withPromotedLabel(RestrorantCard);

  console.log("Body rendered", ListofRestrorants);

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

  const { loggedInUser, setUserName } = useContext(UserContext);

  return ListofRestrorants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4 p-4 body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-sm"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
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
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black rounded-md p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestorant.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            {restaurant.data.promoted ? (
              <RestaurantCardPromtoted resData={restaurant} />
            ) : (
              <RestrorantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
