import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Fourth: React.FC<{ name: string }> = ({ name }) => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__fourth">
      Actually, that's not true. I feel like I'm always asking for more. I think
      when you get around
      <br />
      to caring about someone, them being okay
      <br />
      just isn't enough anymore.
      <br />
      <br />
      You always want more for them.
      <br />
      <br />
      So I wished for {name}'s health because a deserves that too.
      <br />
      <br />I hope they're taking care. I've never seen brighter eyes.
      <br />
      Don't you think they've got places to go?
      <br />
      Someone to become? That starts with the fundamentals, right?
      <br />
      <br />
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        Right.
      </button>
    </p>
  );
};

export default Fourth;
