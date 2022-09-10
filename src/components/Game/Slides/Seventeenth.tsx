import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Seventeenth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__seventeenth">
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        Peace of mind
      </button>
      .
    </p>
  );
};

export default Seventeenth;
