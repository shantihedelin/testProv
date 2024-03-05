import { createSlice } from "@reduxjs/toolkit";


// Skapa en slice med namnet "questionsanswers" och ett initialState
// som innehåller en tom fråga och ett tomt svar
const questionSlice = createSlice({
  name: "questionsanswers",
  initialState: {
    question: "",
    answer: "",
  },

// Här defineras saker vi kan göra med vår slice. 
  reducers: {
    // setQuestion reducer-funktionen tar emot ett payload
    // (en ny fråga) och uppdaterar tillståndet för question
    setQuestion: (state, action) => {
      const newQuestion = action.payload; // payload är den nya frågan
      return { ...state, question: newQuestion }; // uppdaterar frågan 
    },
    setAnswer: (state, action) => {
      const newAnswer = action.payload; // payload är det nya svaret
      return { ...state, answer: newAnswer };
    },
  },
});


// Exportera funktionerna så att andra delar av koden kan använda dom
//* Detta görs varje gång
export const { setQuestion, setAnswer } = questionSlice.actions;

// Exportera reducer-funktionen för att användas när Redux storen konfigureras.
// Dessa åtgärder skickas till Redux store så den vet hur den ska uppdatera 
// tillstånd. 
export default questionSlice.reducer;
