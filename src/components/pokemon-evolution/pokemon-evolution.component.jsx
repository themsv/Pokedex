import { useContext } from "react";
import { PokemonsDataContext } from "../../contexts/pokemons.context";
import Pokemon from "../../components/pokemon/pokemon.component";

const PokemonEvolution = ({ pokemonEvolution }) => {
  console.log(pokemonEvolution);
  const { pokemonsData } = useContext(PokemonsDataContext);
  return <div>PokemonEvolution</div>;
};

export default PokemonEvolution;
