import React from "react";
import "./index.scss";

const videoUrl =
  "https://lh3.googleusercontent.com/snyHWh5sPLiHKeNYgPprIdINN_N4bqk5SdaZcUP-dkedYFN-x15kd9YhrTY6iO3rrKor1aopELE1pY46rhknwRkBm6tEwv_PsJQ0RJ4BHNBpOdKmNaUWPvBxb9JMTSuF1276ti5s5A=w2400";

const Home = () => {
  return (
    <div className="home">
      <img className="img" src={videoUrl} alt="gif-home" />
    </div>
  );
};

export default Home;
