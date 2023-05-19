import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Addtoy.css";
import Swal from "sweetalert2";
import useTitle from "../../Title/useTitle";

const Addtoy = () => {
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState("");
  useTitle("Addtoy");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imgURL = form.photo.value;
    const title = form.toy.value;
    const sellerName = user?.displayName;

    const sellerEmail = user?.email;
    const category = selected;
    const quantity = form.quantity.value;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const description = form.detail.value;

    const toy = {
      imgURL,
      title,
      sellerName,
      sellerEmail,
      category,
      quantity,
      price,
      rating,
      description,
    };
    console.log(toy);
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="py-4">
      <div className=" min-h-screen bg-green-100">
        <div className="px-6 py-6 flex-col">
          <div className="text-center ">
            <h1 className="text-4xl font-bold text-green-600 text-center my-6">
              Add Your Toy for Sale
            </h1>
          </div>
          <div className=" shadow-2xl rounded-xl bg-base-100">
            <div className="px-6 py-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="url"
                      name="photo"
                      placeholder="Toy Photo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Toy Name</span>
                    </label>
                    <input
                      type="text"
                      name="toy"
                      placeholder="Toy Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Seller Name"
                      name="seller"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <select
                      className="bg-green-100 py-2 px-2"
                      name="category"
                      onChange={(e) => setSelected(e.target.value)}
                      required
                      id=""
                      //   defaultValue={selected}
                      //   value="category"
                    >
                      <option>Category</option>
                      <option value="police">Police</option>
                      <option value="truck">Truck</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Available</span>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Available Quantity"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      placeholder="$Price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Ratings</span>
                    </label>
                    <input
                      max="5"
                      min="0"
                      type="text"
                      name="rating"
                      placeholder="Ratings"
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
                      className="border-4 p-4"
                      placeholder="Detail Description"
                      id=""
                      cols="10"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form-control mt-6"></div>
                <input
                  className="btn bg-green-600 normal-case w-full hover:bg-green-700"
                  type="submit"
                  value="Add Toy"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtoy;
