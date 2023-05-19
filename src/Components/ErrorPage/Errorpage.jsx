import { Link } from "react-router-dom";
import useTitle from "../../Title/useTitle";

const Errorpage = () => {
  useTitle("ErrorPage");
  return (
    <div className="text-center my-6">
      <Link to="/">
        <button className=" btn bg-green-600  hover:bg-green-700 ">
          Back To home
        </button>
      </Link>

      <img
        className="w-[80vw] h-[90vh] mx-auto"
        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
        alt=""
      />
    </div>
  );
};

export default Errorpage;
