import "./navbar.css";
import { Link } from "react-router-dom";
import dropdownIcon from "../../../public/images/down-arrow.png";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = ({ handleClick }) => {
  const { cartItems, totalQuantity } = useSelector((state) => state.cart);
  const [arrow, setArrow] = useState(null);
  const arrowHandler = () => {
    setArrow(!arrow);
  };
  return (
    <nav className="nav">
      <ul className="md:flex md:items-center gap-6">
        <li className="list-menu relative" onClick={handleClick}>
          <Link className="text-white" to="/">
            Shop
          </Link>
        </li>
        <li className="list-menu relative" onClick={handleClick}>
          <Link
            className="text-white inline-flex gap-2 items-center"
            to="/cart"
          >
            cart{" "}
            <span className="bg-green-600 inline-flex justify-center text-center w-6 h-6 rounded-full">
              {totalQuantity}
            </span>
          </Link>
        </li>
        <li
          className={`list-menu relative ${arrow ? "arrowDropdown" : ""}`}
          onClick={arrowHandler}
        >
          <span className="toggleArrowBtn text-black md:text-white flex justify-between items-center gap-2">
            Category
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 mt-1 lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
          <ul className="dropdown-menu md:bg-zinc-950 absolute w-full md:w-40">
            <li className="w-full" onClick={handleClick}>
              <Link
                className="text-white inline-block w-full ps-5 md:px-3 md:py-3 hover:bg-red-950"
                to="/category/beauty"
              >
                beauty
              </Link>
            </li>
            <li className="w-full" onClick={handleClick}>
              <Link
                className="text-white inline-block w-full ps-5 md:px-3 md:py-3 hover:bg-red-950"
                to="/category/fragrances"
              >
                fragrances
              </Link>
            </li>
            <li className="w-full" onClick={handleClick}>
              <Link
                className="text-white inline-block w-full ps-5 md:px-3 md:py-3 hover:bg-red-950"
                to="/category/furniture"
              >
                furniture
              </Link>
            </li>
            <li className="w-full" onClick={handleClick}>
              <Link
                className="text-white inline-block w-full ps-5 md:px-3 md:py-3 hover:bg-red-950"
                to="/category/groceries"
              >
                groceries
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
