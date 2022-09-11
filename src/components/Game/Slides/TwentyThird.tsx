import React, { useContext } from "react";
import GameCtx from "../gamectx";

const TwentyFourth: React.FC<{ name: string }> = () => {
  const { setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__twentyfourth">
      {/* at this point we loop infinitely starting from 19 */}
      <button className="link-minimal-loop" onClick={() => setSlide(() => 19)}>
        Your happiness
      </button>
      .
      <br />
      And again.
    </p>
  );
};

export default TwentyFourth;
