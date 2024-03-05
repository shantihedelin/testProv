// 6. Fråga och Svar med Redux Toolkit 3p
// Skapa en applikation med två komponenter: QuestionComponent och AnswerComponent.
//Använd Redux Toolkit för att hantera en fråga som ställs i QuestionComponent och
// sedan svaras på i AnswerComponent.

// State: Skapa en store och en questionSlice som hanterar en fråga och ett svar.
// questionSlice ska innehålla tillstånd för question (en sträng) och answer
// (en sträng), med actions för att sätta en ny fråga och svara på den.

// QuestionComponent: Ska visa ett inputfält där användaren kan skriva in en
// fråga. När frågan skickas (t.ex. genom att trycka på en knapp), ska frågan
// lagras i Redux store med hjälp av den action som definieras i questionSlice.

// AnswerComponent: Ska visa ett inputfält och en knapp för att svara
// på frågan. När svaret skickas, ska det också lagras i Redux store och visas
// under inputfältet.

import QuestionComponent from "./Components/QuestionComponent";
import AnswerComponent from "./Components/AnswerComponent";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSelector } from "react-redux";



function App() {

const question = useSelector((state) => state.questionsanswers.question);
const answer = useSelector((state) => state.questionsanswers.answer);


  return (
    <Provider store={store}>
      <QuestionComponent />
      <AnswerComponent />
      {question ? <p>question: {question}</p> : ""}
      {answer ? <p>answer: {answer}</p> : ""}
    </Provider>
  );
}

export default App;
