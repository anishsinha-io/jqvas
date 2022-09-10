import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Seventh: React.FC<{ name: string }> = ({ name }) => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__seventh">
      That's a good question. I feel like we all have our own idea of what
      "deserving" looks like. To me, it looks a lot like {name}. Do you think
      that—
      <br />
      <br />
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        I think you should tell them this.
      </button>
    </p>
  );
};

export default Seventh;
