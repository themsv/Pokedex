import { useState } from "react";
import Navbar from "../../components/navbar/navbar.component";
import Search from "../../components/search/search.component";
import Pokemons from "../../components/pokemons/pokemons.component";
import styled from "styled-components";

const DashboardContainer = styled.div`
  padding: 0 64px 32px;
  background-color: #deecec;
  min-height: 100vh;
`;
const Dashboard = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  return (
    <DashboardContainer>
      <Navbar />
      <Search searchPokemon={searchPokemon} filterPokeman={setSearchPokemon} />
      <Pokemons searchPokemon={searchPokemon} />
    </DashboardContainer>
  );
};

export default Dashboard;
