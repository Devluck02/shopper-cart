import Card from "../../components/card/Card";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);
  const { categoryName } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${categoryName}`
      );
      const product = await response.json();
      setData(product.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [categoryName]);

  return (
    <div className="category-page">
      <h2 className="text-2xl font-semibold pt-4 pb-8">
        Category {`>`} {categoryName}
      </h2>
      <div className="md:flex md:items-start flex-wrap">
        {data.map((product) => (
          <Card
            key={product.id}
            category={product.category}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
            rating={product.rating}
            productlink={`/product/${product.id}`}
            productName={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
