import React, { useEffect, useState } from "react";
import Siriwave from "react-siriwave";
import ReactHowler from "react-howler";
import axios from "axios";
import Aurora from "./Aurora";

import "./styles.css";

import RadioList from "./RadioList";

axios.create({
  baseURL: "https://rfcmedia.streamguys1.com",
});

export default function App() {
  const playerEl = React.useRef<any>(null);
  const [radios, setRadio] = useState();

  useEffect(() => {
    async function request() {
      await fetch("https://si7lu.sse.codesandbox.io/api", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.json());
          return res.json();
        })
        .catch((err) => console.log(err));
    }

    request();
  }, []);

  interface Radio {
  id: number;
  name: string;
}
const selectRadio = (radio: Radio) => {};

  return (
    <div className="App">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div>
        <Siriwave
          style="ios9"
          color="#1cc246"
          cover
          speed={0.1}
          amplitude={1.5}
          frequency={1}
          lerpSpeed={2}
        />
        <ReactHowler
          src="https://samplelib.com/lib/preview/mp3/sample-15s.mp3"
          html5
          playing={true}
          ref={playerEl}
        />
      </div>
      {/* <RadioList /> */}
    </div>
  );
}
