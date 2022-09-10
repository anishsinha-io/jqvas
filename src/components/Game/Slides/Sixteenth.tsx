import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Sixteenth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__sixteenth">
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        Space
      </button>
      .
    </p>
  );
};

export default Sixteenth;
