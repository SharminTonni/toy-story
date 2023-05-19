import useTitle from "../../Title/useTitle";
import Banner from "../Banner/Banner";
import Delivery from "../Dwlivery/Delivery";
import Gallery from "../Gallery/Gallery";
import Slide from "../Slide/Slide";
import Category from "../Tab/Category";

const Home = () => {
  useTitle("Home");
  return (
    <div className="">
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <Delivery></Delivery>
      <Slide></Slide>
    </div>
  );
};

export default Home;
