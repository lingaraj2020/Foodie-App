import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <div>
                <span className="font-semibold">
                  {" "}
                  ₹{item.card.info.price / 100}
                </span>
              </div>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-3">
            <div className="absolute">
              <button className="p-1 mx-12 rounded-lg bg-white text-green-600 shadow-lg">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-md w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
