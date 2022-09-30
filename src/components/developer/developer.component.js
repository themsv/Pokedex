import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #c0eb75;
  width: 60vw;
  height: 60vh;
  z-index: 9999;
  font-size: 18px;
`;

function Developer() {
  return (
    <Container>
      <h3>Hey! Thanks for visiting my page.</h3>
      <h3>
        I am <a href="https://themsv.github.io/">Mahendrakar Saivenkat</a>
      </h3>
      <p>
        This app is built using <a href="https://pokeapi.co/">Pokedex api</a>{" "}
        with React, Styled Components, Axios
      </p>
    </Container>
  );
}

export default Developer;
