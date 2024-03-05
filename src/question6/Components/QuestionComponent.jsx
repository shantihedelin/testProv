import { useState } from "react";
import { useDispatch } from "react-redux";

function QuestionComponent() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

function handleAddQuestion(e) {
  dispatch(addQuestion(e.target.value));
}

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange}></input>
      <button onClick={handleAddQuestion}>Ask</button>
    </div>
  );


}

export default QuestionComponent;
