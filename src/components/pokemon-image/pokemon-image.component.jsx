import styled from "styled-components";

const CustomBorder = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23333' stroke-width='1' stroke-dasharray='6%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 12px;
  padding: 1px;
  display: inline-block;
`;
const PokemonCard = styled.figure`
  border-radius: 12px;
  text-align: center;
  padding: 20px;
  ${(props) =>
    props.bgColor.length > 1
      ? `background: linear-gradient(${props.bgColor[0]}, ${props.bgColor[1]})`
      : `background-color:${props.bgColor[0]}`};
`;

const Pokemonimg = styled.img`
  width: 142px;
  height: ${(props) => props.customHeight || "160px"};
  margin-bottom: 20px;
  cursor: pointer;
`;

const PokemonImg = ({ pokemon, children, customHeight }) => {
  return (
    <CustomBorder>
      {pokemon && (
        <PokemonCard bgColor={pokemon.bgColors}>
          <Pokemonimg
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokemonId}.svg`}
            alt={pokemon.name}
            customHeight={customHeight}
          />
          {children}
        </PokemonCard>
      )}
    </CustomBorder>
  );
};

export default PokemonImg;
