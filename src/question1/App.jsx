// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

import React, { useState } from "react";

function List() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  function handleInputChange(e) {
    setText(e.target.value);
  }

  const handleAddComment = () => {
    if (text.trim() !== "") { // Trim för att undvika att lägga till tomma strängar
      setComments([...comments, text]);
      setText("");
    }
  };

  const handleDeleteComment = (comment) => {
    const newComments = comments.filter((c) => c !== comment);
    setComments(newComments);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <ul>
        {comments && comments.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => handleDeleteComment(comment)}>Ta bort</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddComment}>Lägg till</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <List />
    </div>
  );
}

export default App;

