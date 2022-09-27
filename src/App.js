import { Routes, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/dashboard.component";
import Details from "./features/details/details.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/abc" element={<Details />}></Route>
    </Routes>
  );
};

export default App;
