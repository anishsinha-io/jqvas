import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Second: React.FC<{ name: string }> = ({ name }) => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__second">
      I wished for {name}'s
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        happiness
      </button>{" "}
      because {name} deserves it.
    </p>
  );
};

export default Second;
