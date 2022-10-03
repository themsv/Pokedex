import { useContext, useEffect, useState } from "react";
import { PokemonsDataContext } from "../../contexts/pokemons.context";
import Pokemon from "../../components/pokemon/pokemon.component";
import styled from "styled-components";

const PokemonEvolution = ({ pokemonEvolution }) => {
  const { pokemonsData } = useContext(PokemonsDataContext);

  const [pokemonsEvolution, setPokemonsEvolution] = useState([]);

  useEffect(() => {
    const requiredPokesId = pokemonEvolution.map((poke) =>
      poke.url
        .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
        .replace("/", "")
    );
    const requiredPokes = requiredPokesId.map(
      (pokeid) => pokemonsData[Number(pokeid) - 1]
    );
    setPokemonsEvolution(requiredPokes);
  }, []);
  return (
    <>
      <h3>Evolution Chain</h3>
      <PokemonEvolutionContainer>
        {pokemonsEvolution &&
          pokemonsEvolution.map((pokemon, _index) => {
            return (
              <>
                <Pokemon pokemon={pokemon} />
                {pokemonsEvolution.length !== _index + 1 && (
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                )}
              </>
            );
          })}
      </PokemonEvolutionContainer>
    </>
  );
};

export default PokemonEvolution;

const PokemonEvolutionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
