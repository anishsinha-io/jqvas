import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Nineteenth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__nineteenth">
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        Safety
      </button>
      .
      <br />
      And on.
    </p>
  );
};

export default Nineteenth;
