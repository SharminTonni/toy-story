import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { FallingLines } from "react-loader-spinner";

const Main = () => {
  const navigation = useNavigation();

  return (
    <div>
      <div className="max-w-7xl mx-auto mt-6">
        <Header></Header>
        <div>
          {navigation === "loading" && (
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          )}
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
