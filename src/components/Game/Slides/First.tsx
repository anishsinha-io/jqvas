import { useContext } from "react";
import GameCtx from "../gamectx";

const First: React.FC<{ name: string }> = ({ name }) => {
  const { slide, setSlide } = useContext(GameCtx);

  return (
    <p className="game-text game-text__first">
      Someone asked me what I wished for and I
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        said
      </button>
      ...
    </p>
  );
};

export default First;
