import "./Banner.css";
const Banner = () => {
  return (
    <div className="bg font-serif text-center mb-12">
      <h1
        className="text-5xl font-bold  text-white  pt-24 
      "
      >
        Pick The Best Toy <br /> for Your Kids
      </h1>
      <p className="text-lg mt-5 font-semibold">
        Make Their Play Time Blast With Our Finest Toy Cars and Vehicles
      </p>
      <div className="lg:mt-64 justify-center items-center gap-5  text-center">
        <p className="text-2xl  text-white font-semibold">
          We Offer A Premium Service For Online Shopping
        </p>
        {/* <button className="btn text-green-600 border-none  hover:bg-green-200 normal-case bg-white font-bold text-xl">
          Purchase
        </button> */}
      </div>
    </div>
  );
};

export default Banner;
