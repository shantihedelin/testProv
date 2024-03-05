import { useState } from "react";
import { useDispatch } from "react-redux";

function AnswerComponent() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleAddAnswer(e) {
    dispatch(addAnswer(e.target.value));
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange}></input>
      <button onClick={handleAddAnswer}>Answer</button>
    </div>
  );
}

export default AnswerComponent;
