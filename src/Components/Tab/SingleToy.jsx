import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const SingleToy = () => {
  const toy = useLoaderData();
  //   console.log(toy);
  const {
    category,
    description,
    imgURL,
    price,
    quantity,
    rating,
    seller,
    title,
    _id,
  } = toy || {};
  return (
    <div className="card  bg-base-100 shadow-xl mt-12">
      <figure>
        <img src={imgURL} className="w-[500px] img-fluid" alt="Album" />
      </figure>
      <div className="card-body font-serif">
        <div>
          <h2 className="card-title text-2xl mx-auto">{title}</h2>
          <div className="text-lg ">
            <p>Seller Name: {seller?.name || toy.sellerName}</p>
            <p>Seller Email: {seller?.email || toy.sellerEmail}</p>
            <p>Sub-Category: {category}</p>
            <p>Price: ${price}</p>
            <p>Available: {quantity}</p>
            <p className="w-1/2">Description: {description}</p>

            <p className="flex items-center">
              <Rating
                value={rating}
                style={{ maxWidth: "100px" }}
                readOnly
              ></Rating>
              <span>{rating}</span>
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-green-600 hover:bg-green-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
