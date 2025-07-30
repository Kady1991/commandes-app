import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/Dashboard";
import CommandePage from "./pages/CommandePage";
import AddCommande from "./components/AddCommande";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<CommandePage />} />
          <Route path="add" element={<AddCommande />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
