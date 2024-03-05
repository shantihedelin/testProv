import { useContext } from "react";
import { ColorContext } from "./ColorContext";

function ColorDisplay() {
  const {state} = useContext(ColorContext);

  return (
    <div>
      <p>Selected color: {state.color}</p>
    </div>
  );
}

export default ColorDisplay;
