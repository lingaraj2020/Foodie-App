import { CDN_URL } from "../utils/constants";

const RestrorantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div
      className="m-2 p-4 w-[275px] h-[440px] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestrorantCard;
