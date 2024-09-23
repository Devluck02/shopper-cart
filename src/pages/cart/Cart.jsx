// src/components/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cartSlice";
const Cart = () => {
  const { cartItems, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="py-4 px-2">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2 className="text-center text-4xl font-semibold mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-center text-2xl font-semibold">
            Add some products to the cart.
          </p>
        </div>
      ) : (
        <div className="cart-wrapper">
          <h1 className="text-2xl font-semibold mt-5 mb-10">
            Product added ({totalQuantity})
          </h1>
          <ul className="overflow-x-scroll md:overflow-x-hidden">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className=" w-full  border-b-2 flex items-center justify-between mb-2 pb-2"
              >
                <div className="flex items-center gap-2 w-full justify-between">
                  <img className="w-16 h-16" src={item.thumbnail} alt="" />
                  <span className="whitespace-nowrap text-lg">
                    {item.title}
                  </span>{" "}
                  -{" "}
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    price ${item.price}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    x {item.quantity}
                  </span>
                  <button
                    className="bg-red-900 px-4 py-2 text-white"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
