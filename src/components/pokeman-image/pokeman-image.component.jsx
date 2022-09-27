import styled from "styled-components";
import { useState, useEffect } from "react";
import { COLORS } from "../../utils/colors";
import { fetchPokemanTypes } from "../../utils/api";

const CustomBorder = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23333' stroke-width='1' stroke-dasharray='6%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 12px;
  padding: 1px;
  display: inline-block;
`;
const PokemanCard = styled.figure`
  border-radius: 12px;
  text-align: center;
  padding: 20px;
  ${(props) =>
    props.bgColor.length > 1
      ? `background: linear-gradient(${props.bgColor[0]}, ${props.bgColor[1]})`
      : `background-color:${props.bgColor[0]}`};
  cursor: pointer;
`;

const Pokemanimg = styled.img`
  width: 152px;
  height: ${(props) => props.customHeight || "176px"};
  margin-bottom: 20px;
`;

const PokemanImg = ({ pokeman, pokemanId, children, customHeight }) => {
  const [bgColor, setBgColor] = useState([]);
  useEffect(() => {
    const getTypes = async () => {
      const data = await fetchPokemanTypes(pokeman.url);
      const bgColor = await data.map((_type) => COLORS[_type]);
      setBgColor(bgColor);
    };
    getTypes();
  }, []);
  return (
    <CustomBorder>
      <PokemanCard bgColor={bgColor}>
        <Pokemanimg
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemanId}.svg`}
          alt={pokeman.name}
          customHeight={customHeight}
        />
        {children}
      </PokemanCard>
    </CustomBorder>
  );
};

export default PokemanImg;
