import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardEstoque from "./Painel.devolucao";
import DashboardReversa from "./Painel.reversa";
import DashboardVenlot from "./Painel.venlot";

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
