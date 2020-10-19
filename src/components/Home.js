import React from "react";
import AudioPlayer from "./AudioPlayer";
import TitleBar from "./TitleBar";

const Home = () => {
  return (
    <div className="container">
      <TitleBar />
      <AudioPlayer />
    </div>
  );
};

export default Home;
