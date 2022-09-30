import Dashboard from "./features/dashboard/dashboard.component";
import Details from "./features/details/details.component";
import Developer from "./components/developer/developer.component";
import { PokemanModalContext } from "./contexts/pokeman-modal.context";
import { useContext, useEffect, useState } from "react";

const App = () => {
  const { pokemonInModal } = useContext(PokemanModalContext);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);
  return (
    <>
      {show && <Developer />}
      <Dashboard />
      {pokemonInModal && <Details />}
    </>
  );
};

export default App;
