import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Categorytoys = ({ toy }) => {
  const { title, imgURL, price, rating, _id } = toy || {};
  const { user } = useContext(AuthContext);

  const handleDetails = () => {
    if (!user) {
      Swal.fire({
        title: "Login!",
        text: "To see Details of This Toy you have to login first",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl shadow-green-200 mb-4">
      <figure className="px-10 pt-10">
        <img src={imgURL} alt="Shoes" className="rounded-xl h-48" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <p className="flex items-center">
          <Rating
            value={rating}
            style={{ maxWidth: "100px" }}
            readOnly
          ></Rating>
          <span>{rating}</span>
        </p>
        <div className="card-actions">
          <Link to={`/singletoy/${_id}`}>
            <button
              onClick={handleDetails}
              className="btn bg-green-600 hover:bg-green-700 normal-case"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categorytoys;
