import { useState } from "react";
import ShootingStarOverCity from "../../assets/shooting-star-over-city.gif";

import GameCtx from "./gamectx";
import First from "./Slides/First";
import Second from "./Slides/Second";
import Third from "./Slides/Third";
import Fourth from "./Slides/Fourth";
import Fifth from "./Slides/Fifth";
import Sixth from "./Slides/Sixth";
import Seventh from "./Slides/Seventh";
import Eighth from "./Slides/Eighth";
import Ninth from "./Slides/Ninth";
import Tenth from "./Slides/Tenth";
import Eleventh from "./Slides/Eleventh";
import Twelfth from "./Slides/Twelfth";
import Thirteenth from "./Slides/Thirteenth";
import Fourteenth from "./Slides/Fourteenth";
import Fifteenth from "./Slides/Fifteenth";
import Sixteenth from "./Slides/Sixteenth";
import Seventeenth from "./Slides/Seventeenth";
import Eighteenth from "./Slides/Eighteenth";
import Nineteenth from "./Slides/Nineteenth";
import Twentieth from "./Slides/Twentieth";
import TwentyFirst from "./Slides/TwentyFirst";
import TwentySecond from "./Slides/TwentySecond";
import TwentyThird from "./Slides/TwentyThird";
import TwentyFourth from "./Slides/TwentyFourth";

const Game = () => {
  // state
  const [name, setName] = useState<string>("");
  const [ready, setReady] = useState<boolean>(false);
  const [slide, setSlide] = useState<number>(0);

  const slideComponents = [
    <First name={name} />,
    <Second name={name} />,
    <Third name={name} />,
    <Fourth name={name} />,
    <Fifth name={name} />,
    <Sixth name={name} />,
    <Seventh name={name} />,
    <Eighth name={name} />,
    <Ninth name={name} />,
    <Tenth name={name} />,
    <Eleventh name={name} />,
    <Twelfth name={name} />,
    <Thirteenth name={name} />,
    <Fourteenth name={name} />,
    <Fifteenth name={name} />,
    <Sixteenth name={name} />,
    <Seventeenth name={name} />,
    <Eighteenth name={name} />,
    <Nineteenth name={name} />,
    <Twentieth name={name} />,
    <TwentyFirst name={name} />,
    <TwentySecond name={name} />,
    <TwentyThird name={name} />,
    <TwentyFourth name={name} />,
  ];

  // handlers
  const handleChange = (e: any) => {
    setName(() => e.target.value);
  };

  return (
    <GameCtx.Provider value={{ slide, setSlide }}>
      <div className="app-game">
        {!ready && (
          <div className="game-init">
            <h1 className="game-init__heading">What's your name?</h1>
            <input
              type="text"
              onChange={handleChange}
              className="game-init__input"
            />
            <button
              className="game-init__ok"
              onClick={() => setReady(() => true)}
            >
              Ok
            </button>
          </div>
        )}
        {ready && (
          <div className="game-slide game-slide__first">
            <img
              src={ShootingStarOverCity}
              alt="shooting star over city"
              className="game-slide__img game-slide__img--first"
            />
            {slideComponents[slide]}
          </div>
        )}
      </div>
    </GameCtx.Provider>
  );
};

export default Game;
