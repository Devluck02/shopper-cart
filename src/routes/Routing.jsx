import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Category from "../pages/categories/Category";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Cart from "../pages/cart/Cart";
const Routing = () => {
  return (
    <div className="container page-view mx-auto px-4 py-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routing;
