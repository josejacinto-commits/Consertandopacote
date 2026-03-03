import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardEstoque from "./dash.devolucao";
import DashboardReversa from "./dash.reversa";
import DashboardVenlot from "./dash.venlot";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* URL principal abre o Estoque */}
        <Route path="/dev" element={<DashboardEstoque />} />

        {/* URL com /reversa no final abre a Reversa */}
        <Route path="/rev" element={<DashboardReversa />} />

        {/* URL principal abre o Estoque */}
        <Route path="/ven" element={<DashboardVenlot />} />
      </Routes>
    </BrowserRouter>
  );
}





