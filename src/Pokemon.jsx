import React from 'react';

function Pokemon({ id, name, types, hp, attack, defense, speed, specialAttack, specialDefense, image }) {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <div className="pokemon-details">
        <h3>[{id}] {name}</h3>
        <div className="pokemon-types">
          {types.map((type, index) => (
            <span key={index} className="type">{type}</span>
          ))}
        </div>
      </div>
      <div className="base-container">
        <div>
          <p>HP: {hp}</p>
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
        </div>
        <div>
          <p>Speed: {speed}</p>
          <p>Special Attack: {specialAttack}</p>
          <p>Special Defense: {specialDefense}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
