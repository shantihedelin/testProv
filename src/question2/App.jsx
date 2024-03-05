// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

import { useState } from "react";
function ShowEmail() {
  const [email, setEmail] = useState("anna.example.com");
  const [isEditing, setIsEditing] = useState(false);

  function EditEmail() {
    setIsEditing(true);
  }

  function SaveEmail() {
    setEmail(email);
    setIsEditing(false);
  }

  return (
    <div>
      <div>
        {isEditing ? (
          <div>
            {" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button onClick={SaveEmail}>Spara</button>
        
          </div>
        ) : (
          <div>
            <p>{email}</p>
            <button onClick={EditEmail}>Redigera</button>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <ShowEmail />
    </div>
  );
}

export default App;
