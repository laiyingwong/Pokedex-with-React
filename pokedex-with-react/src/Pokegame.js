// ******************************************************
// Pokegame component is for implementing the game logic
// ******************************************************
import Pokedex from "./Pokedex";

function Pokegame(props) {
  let hand1 = [];
  let hand2 = [...props.pokemon];

  while (hand1.length < hand2.length) {
    // generate a random index from hand2 array
    let randIdx = Math.floor(Math.random() * hand2.length);
    // cut out the pokemon in that index and access it with [0] (`splice()` returns an array that contains the pokemon)
    let randPokemon = hand2.splice(randIdx, 1)[0];
    // push the pokemon to hand1
    hand1.push(randPokemon);
  }

  // Calculate the total exps for both hands
  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

// Use the `defaultProps` feature of Pokecard to provide a default list of Pokemon characters to show.
Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
};

export default Pokegame;
