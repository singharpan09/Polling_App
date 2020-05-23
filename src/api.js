import React from "react";
import Axios from "axios";

const API = () => {
  const hello = async (username, password, type) => {
    let response = await Axios.get(
      `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${type}`
    );
    console.log(response.data);
  };
  hello("afffaf", "affaf", "admin");
  return (
    <div>
      <h3>THIS IS API test</h3>
    </div>
  );
};

export default API;
