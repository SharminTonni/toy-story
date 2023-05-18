import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUser(createdUser, {
          displayName: name,
          photoURL: photo,
        });
        form.reset();
      })
      .then()
      .catch((error) => {
        console.log(error);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="hero my-12">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-6 text-green-600">
            Please Sign Up
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-600 hover:bg-green-700 normal-case font-serif text-xl text-white font-bold ">
                  Sign Up
                </button>
              </div>
            </form>
            <p>
              Already Have An Account?{" "}
              <Link className="text-green-600 hover:underline" to="/login">
                Please Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
