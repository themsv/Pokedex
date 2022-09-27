import { useState } from "react";
import Navbar from "../../components/navbar/navbar.component";
import Search from "../../components/search/search.component";
import Pokemen from "../../components/pokemen/pokemen.component";
import styled from "styled-components";

const DashboardContainer = styled.div`
  padding: 0 64px 32px;
  background-color: #deecec;
  min-height: 100vh;
`;
const Dashboard = () => {
  const [searchPokeman, setSearchPokeman] = useState(null);
  return (
    <DashboardContainer>
      <Navbar />
      <Search filterPokeman={setSearchPokeman} />
      <Pokemen searchPokeman={searchPokeman} />
    </DashboardContainer>
  );
};

export default Dashboard;
