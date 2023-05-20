import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallery = () => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setPics(data));
  }, []);
  return (
    <div className=" font-serif my-12  text-center">
      <p className="text-5xl font-bold text-green-600 my-6">
        <i>Play Stories</i>
      </p>
      <p className="text-xl font-semibold mb-2">
        <i>
          A Playing Baby <br /> Is a Healthy Baby
        </i>
      </p>
      <p className="text-lg mb-6">
        <i> Let's give them back Their Play-Time</i>
      </p>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {pics.map((pic) => (
          <img
            key={pic.id}
            className="w-[500px]"
            src={pic.img_url}
            alt="website Logo"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
