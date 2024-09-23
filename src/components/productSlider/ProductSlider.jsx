import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./productslider.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
const ProductSlider = ({ productName }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const product = await response.json();
      setData(product.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    fetchData();
  }, []);

  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    centerMargin: "60px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600, // At this screen width and below
        settings: {
          slidesToShow: 1, // Show 1 slide instead of 2
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };

  const backgroundStyle = {
    padding: "10px",
  };
  return (
    <Slider {...settings}>
      {data.map((product) => (
        <div
          className="slide-card border-2 border-slate-300 p-3 mr-4"
          key={product.id}
        >
          {isLoading ? (
            <Skeleton height={110} />
          ) : (
            <img className="w-28 mx-auto" src={product.thumbnail} alt="" />
          )}
          {isLoading ? (
            <Skeleton height={20} />
          ) : (
            <h2 className="text-xl font-semibold mb-3 line-clamp-1">
              {product.title}
            </h2>
          )}
          <div className="flex justify-between align-baseline">
            {isLoading ? (
              <Skeleton height={20} width={70} />
            ) : (
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Price ${product.price}
              </span>
            )}
            {isLoading ? (
              <Skeleton height={20} width={70} />
            ) : (
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {product.category}
              </span>
            )}
          </div>
          {isLoading ? (
            <Skeleton height={40} />
          ) : (
            <Link
              className="bg-black w-full p-2 block text-white text-center mt-4"
              to={`product/${product.id}`}
            >
              View Details
            </Link>
          )}
          {isLoading ? (
            <Skeleton height={40} />
          ) : (
            <button
              className="bg-gray-900 w-full p-2 block text-white text-center mt-4"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
