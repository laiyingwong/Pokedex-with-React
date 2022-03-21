// *********************************************************
// Pokecard component is for displaying individual card info
// *********************************************************
import "./Pokecard.css";
// image source:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png
// (the pokemon id for these images must be padded with zeros to three places, like: 001, 002, 034, 199, etc. )
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// If the input number is less than 999, pad '00' in the beginning of the number and trim the last 3 digits, otherwise keep the number as it is.
// let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

// OR
let padToThree = (number) => String(number).padStart(3, "0");

// `props` argument is the object defined in the attribute of the Pokecard component in App.js
function Pokecard(props) {
  let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{props.name}</h1>
      <img src={imgSrc} alt="{props.name}" />
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">Exp: {props.exp}</div>
    </div>
  );
}

export default Pokecard;
