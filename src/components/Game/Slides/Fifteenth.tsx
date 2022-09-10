import { useContext } from "react";
import GameCtx from "../gamectx";

const Fifteenth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__fifteenth">
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        Good health
      </button>
      .
    </p>
  );
};

export default Fifteenth;
