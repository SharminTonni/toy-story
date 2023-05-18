import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loggedUSer = result.user;
        console.log(loggedUSer);
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
            Please Login
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-600 hover:bg-green-700 normal-case font-serif text-xl text-white font-bold ">
                  Login
                </button>
              </div>
            </form>
            <p>
              New to Toy Story?{" "}
              <Link className="text-green-600 hover:underline" to="/signup">
                Please Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
