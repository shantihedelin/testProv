// 3. Välj Favoritfärg via Dropdown 3p
// Skapa två React-komponenter: ParentComponent och ChildComponent.
// ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.
// När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
// ParentComponent ska visa användarens valda favoritfärg.

// I ChildComponent, implementera ett <select>-element med några färgalternativ.
// Använd en callback-funktion för att meddela ParentComponent om användarens val.
// ParentComponent ska ta emot och visa det valda färgalternativet.

import { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [color, setColor] = useState("");

  return (
    <div>
      <h1>You have choosen {color}</h1>
      <ChildComponent setColor={setColor} />
    </div>
  );
}

export default App;
