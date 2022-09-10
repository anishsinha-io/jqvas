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
  ];

  console.log(slide);
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
