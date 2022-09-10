import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Eighth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__eighth">
      You're right. I think a should hear this from me. So.
      <br />
      <br />
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        So
      </button>
      ?
    </p>
  );
};

export default Eighth;
