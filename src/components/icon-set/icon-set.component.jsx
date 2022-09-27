import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const IconSet = () => {
  return (
    <IconWrapper>
      <ion-icon name="arrow-back-circle-outline"></ion-icon>
      <ion-icon name="close-circle-outline"></ion-icon>
      <ion-icon name="arrow-forward-circle-outline"></ion-icon>
    </IconWrapper>
  );
};

export default IconSet;
