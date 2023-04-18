import imagenRM from "./img/rick-mortyyy.jpg"
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  console.log(characters)

  return (
    <div className="App">
      <header className="App-header"> 
        <h1 className="title"> Rick & Morty </h1>
        <h1>Yareli Sugey Bravo Morales - zS20006784</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imagenRM} alt="Rick & Morty" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
