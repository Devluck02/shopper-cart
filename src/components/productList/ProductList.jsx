import React, { useState, useEffect } from "react";
import Card from "../card/Card";

const ProductList = () => {
  const [data, setData] = useState([]);
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
    fetchData();
  }, []);

  return (
    <div className="md:flex items-first flex-wrap w-full">
      {data.map((product) => (
        <Card
          key={product.id}
          category={product.category}
          title={product.title}
          thumbnail={product.thumbnail}
          price={product.price}
          rating={product.rating}
          productlink={`product/${product.id}`}
          productName={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
