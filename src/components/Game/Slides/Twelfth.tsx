import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Twelfth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__twelfth">
      Thank you, I'm working on that. Seems like you are too. I'll be here to
      reassure you.
      <br />
      <br />I think for once, we have to let ourselves be important.
      <br />
      <br />
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        Let yourself be important.
      </button>
    </p>
  );
};

export default Twelfth;
