import { useLoaderData } from "react-router-dom";

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
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={imgURL} className="w-64" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
