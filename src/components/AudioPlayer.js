import React, { useState } from "react";

const AudioPlayer = () => {
  const [audioSrc, setAudioSrc] = useState("http://stream.radiosai.net:8000/");
  const audio = React.createRef();

  const setStream = (event) => {
    console.log(event.target.id);
    if (audio.current !== null) {
      audio.current.pause();
      if (event.target.id === "bhajan-stream") {
        setAudioSrc("http://stream.radiosai.net:8000/");
      } else if (event.target.id === "discourse-stream") {
        setAudioSrc("http://stream.radiosai.net:8008/");
      } else if (event.target.id === "asia-stream") {
        setAudioSrc("http://stream.radiosai.net:8002/");
      } else if (event.target.id === "america-stream") {
        setAudioSrc("http://stream.radiosai.net:8006/");
      } else if (event.target.id === "africa-stream") {
        setAudioSrc("http://stream.radiosai.net:8004/");
      } else if (event.target.id === "telugu-stream") {
        setAudioSrc("http://stream.radiosai.net:8020/");
      }
      audio.current.load();
      audio.current.play();
    }

    console.log(event.target.id, audioSrc);
  };

  return (
    <div className="audio-container">
      <audio
        className="audio-player"
        controls
        autoPlay={audioSrc ? true : false}
        name="media"
        ref={audio}
      >
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio format.
      </audio>
      <div className="selection-container">
        <button id="bhajan-stream" onClick={setStream}>
          Bhajan Stream
        </button>
        <button id="discourse-stream" onClick={setStream}>
          Discourse Stream
        </button>
        <button id="asia-stream" onClick={setStream}>
          Asia Stream
        </button>
        <button id="america-stream" onClick={setStream}>
          America Stream
        </button>
        <button id="africa-stream" onClick={setStream}>
          Africa Stream
        </button>
        <button id="telugu-stream" onClick={setStream}>
          Telugu Stream
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
