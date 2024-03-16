import React,{ useEffect, useState } from "react"
import Pokemon from "./Pokemon";

function Pokedex() {
    const [pokemons, setPokemons] =useState([]);


    const LanguageEnglish = () => {
        useEffect(() => {
            fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
            .then(reponse => reponse.json())
            .then(data => {
                setPokemons(data)
            })
        })

        pokemons.map(pokemon => (
            <Pokemon
                id={pokemon.id}
                name={pokemon.name}
                types ={pokemon.type}
                hp = {pokemon.base.HP}
                attack = {pokemon.base.Attack}
                defense = {pokemon.base.Defense}
                speed = {pokemon.base['Sp. Attack']}
                specialAttack = {pokemon.base['Sp. Defense']}
                specialDefense = {pokemon.base.Speed}
                image = {pokemon.image}
                 
                />
        ))
    }
  
    return (
      <div className = "pokemons">
        <div>
          <button className ="button" onClick={LanguageEnglish}>English</button>
          <button className ="button" onClick={LanguageJapanese}>Japanese</button>
          <button className ="button" onClick={LanguageChinese}>Chinese</button>
          <button className ="button" onClick={LanguageFrench}>French</button>
        </div>
      </div>
    );
  }
  
  export default Pokedex;