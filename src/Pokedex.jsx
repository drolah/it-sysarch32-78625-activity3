import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const fetchData = () => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then(response => response.json())
      .then(data => {
        setPokemons(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div>
      <div>
        <button className="button" onClick={() => setSelectedLanguage("english")}>English</button>
        <button className="button" onClick={() => setSelectedLanguage("japanese")}>Japanese</button>
        <button className="button" onClick={() => setSelectedLanguage("chinese")}>Chinese</button>
        <button className="button" onClick={() => setSelectedLanguage("french")}>French</button>
      </div>
      {
        <div className="pokemons">
          {pokemons.map(pokemon => (
            <Pokemon
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name[selectedLanguage]} // Dynamically select name based on selected language
              types={pokemon.type}
              hp={pokemon.base.HP}
              attack={pokemon.base.Attack}
              defense={pokemon.base.Defense}
              speed={pokemon.base.Speed}
              specialAttack={pokemon.base["Sp. Attack"]}
              specialDefense={pokemon.base["Sp. Defense"]}
              image={pokemon.image}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default Pokedex
