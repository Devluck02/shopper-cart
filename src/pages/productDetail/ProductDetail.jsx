import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);
  if (!product)
    return (
      <p className="text-center text-4xl font-semibold py-4">Loading...</p>
    );
  return (
    <div className="single-product py-4">
      <div className="md:flex md:justify-between md:items-start">
        <div className="imgBox border-4 bg-slate-100 w-full md:w-1/4">
          <img className="w-full" src={product.thumbnail} alt={product.title} />
        </div>

        <div className="product-detail w-full md:w-4/6">
          <h1 className="text-4xl font-extrabold mb-3">{product.title}</h1>

          <div className="md:flex md:justify-between md:items-start">
            <p className="text-2xl font-semibold mb-3 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-green-700 ring-1 ring-inset ring-green-600/20">
              Price: ${product.price}
            </p>
            <p className="text-2xl font-semibold mb-3 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-green-700 ring-1 ring-inset ring-green-600/20">
              Rating: {Math.round(product.rating)} &#9734;
            </p>
          </div>
          <p className="text-lg mb-3">{product.description}</p>
          <p className="text-xl font-medium mb-3">
            Return Policy : <span>{product.returnPolicy}</span>{" "}
          </p>

          <div className="md:flex md:items-center gap-2">
            <span className="text-3xl font-bold">Tags</span>
            {product.tags.map((tag) => (
              <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-2xl font-semibold text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-2">
                {tag}
              </span>
            ))}
          </div>
          <div className="review">
            <h2 className="text-3xl font-bold my-2">Customer Reviews</h2>
            {product.reviews.map((review) => (
              <div className="review-card mb-4">
                <h4 className="text-lg font-semibold">
                  Name: {review.reviewerName}
                </h4>
                <p className="text-base">
                  Posted on: {review.date.slice(0, 10)}
                </p>
                <p className="text-base font-medium">
                  Review: {review.comment}
                </p>
                <p className="">Rating: {review.rating} &#9734;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
