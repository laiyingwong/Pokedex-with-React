// *****************************************************
// Pokedex component is for generating sets of Pokecard
// *****************************************************

import "./Pokedex.css";
import Pokecard from "./Pokecard";

// Loop through the props and render a series of Pokecard components
function Pokedex(props) {
  let title;
  if (props.isWinner) {
    title = <h1 className="Pokedex-winner">Winning Hand</h1>;
  } else {
    title = <h1 className="Pokedex-loser">Losing Hand</h1>;
  }

  return (
    <div className="Pokedex">
      {title}
      <h4>Total Exp: {props.exp}</h4>
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
