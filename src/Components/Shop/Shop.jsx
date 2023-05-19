import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Title/useTitle";

const Shop = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  const [searchtext, setSearchText] = useState("");
  //   console.log(toys);

  useTitle("Shop");

  const handleSearch = () => {
    fetch(`http://localhost:5000/toysByTitle/${searchtext}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  //   const handleDelete = (id) => {
  //     fetch(`http://localhost:5000/toys/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };
  return (
    <div className="my-12">
      <div className="overflow-x-auto text-serif">
        <div className="text-center my-5">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Search Toy"
            className=" border-2 py-2 px-2"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="btn bg-green-600 hover:bg-green-700 normal-case"
          >
            Search
          </button>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Toy Tittle</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>
                  <p>
                    {toy.sellerName} <br />
                    <small>{toy.sellerEmail}</small>
                  </p>
                </td>
                <td>{toy.title}</td>
                <td>{toy.category}</td>
                <td>${toy.price}</td>
                <td>{toy.quantity}</td>
                <th>
                  <Link to={`/${toy._id}`}>
                    <button className="btn bg-green-500 hover:bg-green-700 btn-sm normal-case">
                      Details
                    </button>
                  </Link>
                </th>
                {/* <th>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-sm"
                  >
                    delete
                  </button>
                </th> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shop;
