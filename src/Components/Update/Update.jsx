import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const toy = useLoaderData();
  const navigate = useNavigate();
  const {
    description,

    price,
    quantity,

    _id,
  } = toy || {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.detail.value;
    const updatedToy = {
      price,
      quantity,
      description,
    };
    console.log(updatedToy);
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }

        navigate("/mytoy");
      });
  };
  return (
    <div className="py-4">
      <div className=" min-h-screen bg-green-100">
        <div className="px-6 py-6 flex-col">
          <div className="text-center ">
            <h1 className="text-4xl font-bold text-green-600 text-center my-6">
              Update Toy for Info
            </h1>
          </div>
          <div className=" shadow-2xl rounded-xl bg-base-100">
            <div className="px-6 py-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Available</span>
                    </label>
                    <input
                      defaultValue={quantity}
                      type="number"
                      name="quantity"
                      placeholder="Available Quantity"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      defaultValue={price}
                      type="number"
                      name="price"
                      placeholder="$Price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      name="detail"
                      defaultValue={description}
                      className="border-4 p-4"
                      placeholder="Detail Description"
                      id=""
                      cols="10"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form-control mx-auto mt-6">
                  <input
                    className="btn bg-green-600 normal-case hover:bg-green-700 w-full mx-auto"
                    type="submit"
                    value="Update Toy"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
