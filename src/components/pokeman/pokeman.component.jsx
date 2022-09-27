import _ from "lodash";
import PokemanImg from "../pokeman-image/pokeman-image.component";
import { formatNumber } from "../../utils/api";
import { useState } from "react";
import Details from "../../features/details/details.component";

const Pokeman = ({ pokeman, pokemanId }) => {
  const [showPokemanInfo, setPokemanInfo] = useState(false);

  return (
    <div onClick={() => setPokemanInfo(!showPokemanInfo)}>
      <PokemanImg pokemanId={pokemanId} pokeman={pokeman}>
        <h3>{_.capitalize(pokeman.name)}</h3>
        <figcaption> {formatNumber(pokemanId)}</figcaption>
      </PokemanImg>

      {showPokemanInfo && <Details pokeman={pokeman} pokemanId={pokemanId} />}
    </div>
  );
};

export default Pokeman;
