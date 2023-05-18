import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 px-12 py-20 text-slate-200 mt-12">
      <div className=" grid grid-cols-1 lg:grid-cols-4">
        <div>
          <span>
            <img
              className="w-36 h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Toy_Story_logo.svg/1280px-Toy_Story_logo.svg.png"
              alt=""
            />
            <p>
              Address: Chattogram Port, <br /> 39 No. South Halishahar Ward,
              <br /> Chattogram
            </p>
          </span>

          <div className=" flex gap-3 text-center mt-6">
            <Link to="https://twitter.com/">
              <img
                className="w-10 h-10 rounded-circle link"
                src="https://cdn-icons-png.flaticon.com/512/1383/1383265.png"
                alt=""
              />
            </Link>

            <Link to="https://www.youtube.com/">
              <img
                className="w-10 h-10 rounded-circle link"
                src="https://cdn.pixabay.com/photo/2020/12/14/12/38/youtube-5830725_1280.png"
                alt=""
              />
            </Link>
            <Link to="https://www.facebook.com/">
              <img
                className="w-10 h-10 rounded-circle link"
                src="https://cdn-icons-png.flaticon.com/512/725/725289.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className=" flex flex-col">
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Brands</Link>
          <Link className="link link-hover">Sellers</Link>
        </div>
        <div className=" flex flex-col">
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of company</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
        <div>
          <p className="mb-3">For More Details</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Send
            </button>
          </div>
        </div>
      </div>
      <p className="text-center mx-auto mt-12">
        Copyright © 2023 - All rights reserved by Toy Story Ltd.
      </p>
    </div>
  );
};

export default Footer;
