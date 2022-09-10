import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Eleventh: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__eleventh">
      I wished for your health, your space, your peace of mind—
      <br />
      <br />{" "}
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        I wished for your happiness.
      </button>
    </p>
  );
};

export default Eleventh;
