import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Tenth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__tenth">
      I wished for your{" "}
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        safety
      </button>{" "}
      because you deserve it.
    </p>
  );
};

export default Tenth;
