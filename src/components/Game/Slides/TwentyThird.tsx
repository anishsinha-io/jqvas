import React, { useContext } from "react";
import GameCtx from "../gamectx";

const TwentyThird: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__twentythird">
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        Peace of mind
      </button>
      .
      <br />
      And on.
    </p>
  );
};

export default TwentyThird;
