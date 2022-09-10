import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Third: React.FC<{ name: string }> = ({ name }) => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__third">
      And then I wished for {name}'s safety because {name} deserves that too.{" "}
      <br />
      <br />
      It had been awhile but I saw {name} the other day. I was so glad to see
      them because if they're here then I know they're still there and trying.
      <br />
      <br />
      It means that {name} is safe.
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        What more could anyone ask for?
      </button>
    </p>
  );
};

export default Third;
