import "./Banner.css";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      {/* slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://thumbs.dreamstime.com/z/kids-play-toy-cars-children-playing-car-toys-white-room-little-boy-truck-vehicle-transportation-game-kid-parking-187698426.jpg"
          className="w-full "
        />
        <div className="absolute h-full w-full flex justify-center  bg-gradient-to-b from-[#91f76199] to-[rgba(0,0,0,.6)]  gap-4">
          <div className="">
            <h1
              className="text-5xl font-bold  text-white 
      "
            >
              Pick The Best Toy <br /> for Your Kids
            </h1>
            <p className="text-lg mt-5 font-semibold">
              Make Their Play Time Blast With Our Finest Toy Cars and Vehicles
            </p>
            <div className="lg:mt-28  text-center">
              <p className="text-2xl mb-3 text-white font-semibold">
                We Offer A Premium Service For Online Shopping
              </p>
              <button className="btn border-none text-green-600   hover:bg-green-200 normal-case bg-white font-bold text-xl">
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 right-1/2 bottom-1/4 gap-4">
          <a
            href="#slide4"
            className="btn btn-circle  bg-green-600   hover:bg-green-700"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle  bg-green-600   hover:bg-green-700"
          >
            ❯
          </a>
        </div>
      </div>

      {/* slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://c8.alamy.com/comp/R7PAWM/happy-baby-girl-playing-with-toy-car-at-home-R7PAWM.jpg"
          className="w-full "
        />
        <div className="absolute h-full w-full flex justify-center  bg-gradient-to-b from-[#91f76199] to-[rgba(0,0,0,.6)]  gap-4">
          <div className="">
            <h1
              className="text-5xl font-bold  text-white 
      "
            >
              Pick The Best Toy <br /> for Your Kids
            </h1>
            <p className="text-lg mt-5 font-semibold">
              Make Their Play Time Blast With Our Finest Toy Cars and Vehicles
            </p>
            <div className="lg:mt-28  text-center">
              <p className="text-2xl mb-3 text-white font-semibold">
                We Offer A Premium Service For Online Shopping
              </p>
              <button className="btn border-none text-green-600   hover:bg-green-200 normal-case bg-white font-bold text-xl">
                Purchase
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-center transform -translate-y-1/2 right-1/2 bottom-1/4 gap-4">
          <a
            href="#slide1"
            className="btn btn-circle  bg-green-600   hover:bg-green-700"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle  bg-green-600   hover:bg-green-700"
          >
            ❯
          </a>
        </div>
      </div>

      {/* slide 3 */}

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://thumbs.dreamstime.com/z/funny-boy-baby-playing-toy-car-kid-38656451.jpg"
          className="w-full "
        />
        <div className="absolute h-full w-full flex justify-center  bg-gradient-to-b from-[#91f76199] to-[rgba(0,0,0,.6)]  gap-4">
          <div className="">
            <h1
              className="text-5xl font-bold  text-white 
      "
            >
              Pick The Best Toy <br /> for Your Kids
            </h1>
            <p className="text-lg mt-5 font-semibold">
              Make Their Play Time Blast With Our Finest Toy Cars and Vehicles
            </p>
            <div className="lg:mt-28  text-center">
              <p className="text-2xl mb-3 text-white font-semibold">
                We Offer A Premium Service For Online Shopping
              </p>
              <button className="btn border-none text-green-600   hover:bg-green-200 normal-case bg-white font-bold text-xl">
                Purchase
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-center transform -translate-y-1/2 right-1/2 bottom-1/4 gap-4">
          <a
            href="#slide2"
            className="btn btn-circle  bg-green-600   hover:bg-green-700"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle  bg-green-600   hover:bg-green-700"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://www.shutterstock.com/image-photo/one-year-old-caucasian-baby-260nw-2006296334.jpg"
          className="w-full "
        />
        <div className="absolute h-full w-full flex justify-center  bg-gradient-to-b from-[#91f76199] to-[rgba(0,0,0,.6)]  gap-4">
          <div className="">
            <h1
              className="text-5xl font-bold  text-white 
      "
            >
              Pick The Best Toy <br /> for Your Kids
            </h1>
            <p className="text-lg mt-5 font-semibold">
              Make Their Play Time Blast With Our Finest Toy Cars and Vehicles
            </p>
            <div className="lg:mt-28  text-center">
              <p className="text-2xl mb-3 text-white font-semibold">
                We Offer A Premium Service For Online Shopping
              </p>
              <button className="btn border-none text-green-600   hover:bg-green-200 normal-case bg-white font-bold text-xl">
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 right-1/2 bottom-1/4 gap-4">
          <a
            href="#slide3"
            className="btn btn-circle  bg-green-600   hover:bg-green-700"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle  bg-green-600   hover:bg-green-700"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
