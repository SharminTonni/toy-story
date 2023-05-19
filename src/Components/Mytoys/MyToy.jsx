import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = myToys.filter((mytoy) => mytoy._id !== id);
            setMyToys(remaining);
          });
      }
    });
  };

  return (
    <div className="my-12">
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <div>Delete</div>
                </label>
              </th>
              <th>Toy</th>

              <th>Available</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Details</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((myToy) => (
              <tr key={myToy._id}>
                <th>
                  <label>
                    <button
                      onClick={() => handleDelete(myToy._id)}
                      className="btn btn-circle"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-24 h-24">
                        <img
                          src={myToy.imgURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{myToy.title}</div>
                      <div className="text-sm opacity-50">$ {myToy.price}</div>
                    </div>
                  </div>
                </td>

                <td>{myToy.quantity} pc</td>
                <td>{myToy.category}</td>
                <td>{myToy.rating}</td>
                <th>
                  <Link to={`/${myToy._id}`}>
                    <button className="btn btn-ghost btn-xs normal-case">
                      Details
                    </button>
                  </Link>
                </th>
                <th>
                  <Link to={`/update/${myToy._id}`}>
                    <button className="btn btn-ghost btn-xs normal-case">
                      Update
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
