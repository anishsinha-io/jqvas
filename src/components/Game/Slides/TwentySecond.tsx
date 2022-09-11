import React, { useContext } from "react";
import GameCtx from "../gamectx";

const TwentySecond: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__twentysecond">
      <button
        className="link-minimal-loop"
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

export default TwentySecond;
