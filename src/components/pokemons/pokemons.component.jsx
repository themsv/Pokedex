import { useEffect, useState, useContext } from "react";
import { PokemonsDataContext } from "../../contexts/pokemons.context";
import Pokemon from "../pokemon/pokemon.component";
import styled from "styled-components";

const Pokemons = ({ searchPokemon }) => {
  const { pokemonsData } = useContext(PokemonsDataContext);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  useEffect(() => {
    if (pokemonsData.length) {
      setFilteredPokemons(pokemonsData);
    }
  }, [pokemonsData]);
  useEffect(() => {
    const filteredPokes = pokemonsData.filter(
      (pokeman) =>
        pokeman.name.toLowerCase().includes(searchPokemon) ||
        String(pokeman.pokemanId).includes(searchPokemon)
    );
    setFilteredPokemons(filteredPokes);
  }, [searchPokemon]);
  return (
    <PokemonsContainer>
      {filteredPokemons &&
        filteredPokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
    </PokemonsContainer>
  );
};

export default Pokemons;

const PokemonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;
