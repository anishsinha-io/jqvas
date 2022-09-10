import React, { useContext } from "react";
import GameCtx from "../gamectx";

const Fifth: React.FC<{ name: string }> = ({ name }) => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__fifth">
      And space.
      <br />
      <br />
      Don't you think that space is always overlooked?
      <br />
      We're so worried about people being alone but it's really the loneliness
      that does the damage. So you just have to reassure the people you love and
      let them do their thing. I think {name} deserves time for themselves
      sometimes too, you know? To reflect, recharge, and then come back around
      whenever they feel better.
      <br />
      <br />
      I'm always so happy when {name} comes around. I think I'll always be there
      to greet them; even if it's in passing, I'd love to hear from them.
      <br />
      <br />
      So yeah, I always wish for {name}'s
      {/* we have to add the following line because otherwise there will be an annoying extra space before 'space' */}
      {/* prettier-ignore */}
      <button className="link-minimal"  onClick={() => setSlide(() => slide + 1)}>space</button>
      <br />
      because {name} deserves it.
    </p>
  );
};

export default Fifth;
