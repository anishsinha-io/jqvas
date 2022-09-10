import { useContext } from "react";
import GameCtx from "../gamectx";

const Fourteenth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__fourteenth">
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        Safety
      </button>
      .
    </p>
  );
};

export default Fourteenth;
