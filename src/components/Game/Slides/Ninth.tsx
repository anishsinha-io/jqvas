import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Ninth: React.FC<{ name: string }> = ({ name }) => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__ninth">
      I wished for
      <br />
      your{" "}
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        happiness
      </button>{" "}
      <br />
      because you deserve it.
    </p>
  );
};

export default Ninth;
