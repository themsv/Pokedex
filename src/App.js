import Dashboard from "./features/dashboard/dashboard.component";
import Details from "./features/details/details.component";
import { PokemanModalContext } from "./contexts/pokeman-modal.context";
import { useContext } from "react";

const App = () => {
  const { pokemonInModal } = useContext(PokemanModalContext);
  return (
    <>
      <Dashboard />
      {pokemonInModal && <Details />}
    </>
  );
};

export default App;
