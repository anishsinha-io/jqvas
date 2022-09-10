import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Sixth: React.FC<{ name: string }> = ({ name }) => {
  const { slide, setSlide } = useContext(GameCtx);

  return (
    <p className="game-text game-text__sixth">
      And peace of mind—I always wish for {name}'s peace of mind.
      <br />
      Whatever they're up to, I hope things work out for {name}.<br />
      Nothing is ever really easy but you just have to meet {name} to know.
      They're so good and trying—why wouldn't things work out for them?
      <br />I hope they realize that too.
      <br />
      And because {name} deserves it.
      <br />
      <br />
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        What makes someone deserving of something
      </button>
      ?
    </p>
  );
};

export default Sixth;
