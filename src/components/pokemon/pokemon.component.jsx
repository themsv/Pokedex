import _ from "lodash";
import PokemanImg from "../pokemon-image/pokemon-image.component";
import { formatNumber } from "../../utils/api";
import { useContext } from "react";
import { PokemanModalContext } from "../../contexts/pokeman-modal.context";

const Pokemon = ({ pokemon }) => {
  const { setPokemonInModal } = useContext(PokemanModalContext);
  return (
    <div
      onClick={() => {
        setPokemonInModal(pokemon);
      }}
    >
      <PokemanImg pokemon={pokemon}>
        <h3>{_.capitalize(pokemon.name)}</h3>
        <figcaption>{formatNumber(pokemon.pokemanId)}</figcaption>
      </PokemanImg>
    </div>
  );
};

export default Pokemon;
