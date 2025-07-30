// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/Dashboard";
import CommandePage from "./pages/CommandePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<CommandePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
