import { useColors } from "./ColorContext";

function ColorSelector() {
  const { dispatch } = useColors();

  return (
    <div>
      <label htmlFor="colorSelect">Choose a color</label>
      <select
        onChange={(e) => {
          dispatch({
            type: "selectFavorite",
            color: e.target.value,
          });
        }}
      >
        <option value="">Please choose a color</option>
        <option value="green">Green</option>
        <option value="pink">Pink</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}

export default ColorSelector;
