import React from "react";

const GameCtx = React.createContext<{
  slide: number;
  setSlide: (args: any) => any;
}>({
  slide: 0,
  setSlide: () => {},
});

export default GameCtx;
