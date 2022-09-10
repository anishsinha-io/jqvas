import { useContext } from "react";
import GameCtx from "../gamectx";

const Thirteenth: React.FC<{ name: string }> = () => {
  const { slide, setSlide } = useContext(GameCtx);
  return (
    <p className="game-text game-text__thirteenth">
      Let yourself be important. You deserve
      <button
        className="link-minimal"
        onClick={() => setSlide(() => slide + 1)}
      >
        happiness.
      </button>
    </p>
  );
};

export default Thirteenth;
