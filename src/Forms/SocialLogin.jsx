import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const handleGoogle = () => {
    googleSignin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="text-center">
      <div className="flex flex-col w-full border-opacity-50 mx-auto">
        <div className="divider">OR</div>
      </div>
      <button
        onClick={handleGoogle}
        className="btn btn-outline hover:bg-green-600 text-green-600 border-green-600"
      >
        <span className="mr-2"> Login With</span> <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
