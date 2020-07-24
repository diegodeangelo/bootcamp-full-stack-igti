import React from "react";
import Toolbar from "./Components/Toolbar";
import Detalhes from "./Components/Detalhes";
import DataSelect from "./Components/DateSelect";
import Transactions from "./Components/Transactions";

export default function App() {
  return (
    <div class="container">
      <h1 class="center-align">Desafio Final do Bootcamp Full Stack</h1>
      <h2 class="center-align">Controler Financeiro Pessoal</h2>

      <DataSelect />

      <Detalhes />

      <Toolbar />

      <Transactions />
    </div>
  );
}
