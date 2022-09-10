import React, { useContext } from "react";

import GameCtx from "../gamectx";

const Twentieth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__twentieth">
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        Good health
      </button>
      .
      <br />
      And on.
    </p>
  );
};

export default Twentieth;
