import styled from "styled-components";
import { useContext } from "react";
import { PokemanModalContext } from "../../contexts/pokeman-modal.context";
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const IconSet = () => {
  const { setPokemonInModal } = useContext(PokemanModalContext);
  return (
    <IconWrapper>
      <ion-icon name="arrow-back-circle-outline"></ion-icon>
      <ion-icon
        onClick={() => setPokemonInModal(null)}
        name="close-circle-outline"
      ></ion-icon>
      <ion-icon name="arrow-forward-circle-outline"></ion-icon>
    </IconWrapper>
  );
};

export default IconSet;
