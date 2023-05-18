import { Link } from "react-router-dom";

const Categorytoys = ({ toy }) => {
  const { title, imgURL, price, rating, _id } = toy || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={imgURL} alt="Shoes" className="rounded-xl h-48" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating} stars</p>
        <div className="card-actions">
          <Link to={`/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categorytoys;
