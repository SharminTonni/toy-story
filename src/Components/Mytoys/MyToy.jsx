import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user]);

  return <div>my Toys will be shown</div>;
};

export default MyToy;
