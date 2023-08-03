import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestrorantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    <div className="m-2 p-4 w-[275px] h-[400px] bg-gray-100 hover:bg-gray-300 rounded-lg">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
// Higher order component
// input-RestaurantCard ==>RestaurantCardPromtoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 px-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestrorantCard;
