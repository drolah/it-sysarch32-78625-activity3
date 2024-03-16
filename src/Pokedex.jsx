import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

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

  const LanguageEnglish = () => {
    return (
      <div className="pokemons">
        {pokemons.map(pokemon => (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name.english}
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
    );
  };

  return (
    <div>
      <div>
        <button className="button" onClick={fetchData}>English</button>
      </div>
      <LanguageEnglish />
    </div>
  );
}

export default Pokedex;
