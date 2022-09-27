import { useEffect, useState } from "react";
import Pokeman from "../pokeman/pokeman.component";
import { fetchPokemen } from "../../utils/api";
import styled from "styled-components";

const Pokemen = ({ searchPokeman }) => {
  const [pokemen, setPokemen] = useState([]);
  const [filteredPokemen, setFilteredPokemen] = useState([]);

  useEffect(() => {
    const getPokemen = async () => {
      const data = await fetchPokemen();
      const alterData = data.map((_eachPoke, _index) => ({
        ..._eachPoke,
        pokemanId: _index + 1,
      }));
      setPokemen(alterData);
      setFilteredPokemen(alterData);
    };
    getPokemen();
  }, []);

  useEffect(() => {
    console.log();
    const filteredPokes = pokemen.filter(
      (pokeman) =>
        pokeman.name.toLowerCase().includes(searchPokeman) ||
        String(pokeman.pokemanId).includes(searchPokeman)
    );
    setFilteredPokemen(filteredPokes);
  }, [searchPokeman]);

  return (
    <PokemenContainer>
      {filteredPokemen.map((pokeman) => (
        <Pokeman
          pokeman={pokeman}
          pokemanId={pokeman.pokemanId}
          key={pokeman.name}
        />
      ))}
    </PokemenContainer>
  );
};

export default Pokemen;

const PokemenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;
