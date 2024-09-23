import "./card.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
const Card = ({
  title,
  thumbnail,
  category,
  price,
  rating,
  productlink,
  productName,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="card w-full md:w-custom-3.5 border-2 border-slate-300">
      <span className="custom-stripe bg-green-50 text-green-700 text-lg w-full flex justify-center">
        {category}
      </span>
      <div className="product-thumbnil">
        {isLoading ? (
          <Skeleton height={110} />
        ) : (
          <img className="w-40 mx-auto" src={thumbnail} alt="product-img" />
        )}
      </div>
      {isLoading ? (
        <Skeleton height={20} />
      ) : (
        <h2 className="text-xl font-semibold px-2 pt-2 line-clamp-1">
          {title}
        </h2>
      )}
      <div className="flex justify-between align-baseline px-2">
        {isLoading ? (
          <Skeleton height={20} width={70} />
        ) : (
          <span className="text-lg">
            <span className="font-semibold">Price</span> $ {price}
          </span>
        )}
        {isLoading ? (
          <Skeleton height={20} width={70} />
        ) : (
          <span className="text-lg">
            <span className="font-semibold">Rating</span> {rating}
          </span>
        )}
      </div>
      <div className="flex justify-between items-start mb-2 mx-2">
        {isLoading ? (
          <Skeleton height={20} width={120} />
        ) : (
          <Link
            to={productlink}
            className="bg-black w-full p-2 block text-white text-center mt-4"
          >
            View Details
          </Link>
        )}
        {isLoading ? (
          <Skeleton height={20} width={120} />
        ) : (
          <button
            className="ml-3 bg-gray-900 w-full p-2 block text-white text-center mt-4"
            onClick={() => dispatch(addToCart(productName))}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
