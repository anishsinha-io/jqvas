import React, { useContext } from "react";
import GameCtx from "../gamectx";

const TwentyFirst: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__twentyfirst">
      <button
        className="link-minimal-loop"
        onClick={() => setSlide(() => slide + 1)}
      >
        Space
      </button>
      .
      <br />
      And on.
    </p>
  );
};

export default TwentyFirst;
