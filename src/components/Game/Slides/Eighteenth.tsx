import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Eighteenth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__eighteenth">
      <button
        className="link-minimal-loop"
        onClick={() => setSlide(() => slide + 1)}
      >
        Your happiness
      </button>
      .
      <br />I could go on.
    </p>
  );
};

export default Eighteenth;
