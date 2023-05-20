import { useEffect, useState } from "react";

import "react-tabs/style/react-tabs.css";
import Categorytoys from "./Categorytoys";

const Category = () => {
  const [currentTab, setCurrentTab] = useState("nothing");
  const [toys, setToys] = useState([]);
  const tabs = [
    {
      id: 1,
      title: "police",
    },
    {
      id: 2,
      title: "truck",
    },
    {
      id: 3,
      title: "luxury",
    },
  ];

  useEffect(() => {
    fetch(`https://toy-story-server.vercel.app/mytoys/${currentTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [currentTab]);

  const handleTab = (title) => {
    setCurrentTab(title);
  };
  return (
    <div className="text-center mt-12" id="main">
      <h1 className="text-center text-4xl my-8 font-bold text-green-600">
        Find Our Collections Here
      </h1>
      <div className="flex gap-5 justify-center items-center">
        {tabs.map((tab) => (
          <div key={tab.id}>
            <button
              className="btn btn-success"
              disabled={currentTab === tab.title}
              onClick={() => handleTab(tab.title)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <div className="grid justify-center  mx-auto grid-cols-1 lg:grid-cols-2 gap-3 mt-12">
        {toys.map((toy) => (
          <Categorytoys key={toy._id} toy={toy}></Categorytoys>
        ))}
      </div>
    </div>
  );
};

export default Category;
