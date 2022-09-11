import React from "react";

// context for game slides so that slides can move to the next one. basically just contains a get/set for the slide number
const GameCtx = React.createContext<{
  slide: number;
  setSlide: (args: any) => any;
}>({
  slide: 0,
  setSlide: () => {},
});

export default GameCtx;
