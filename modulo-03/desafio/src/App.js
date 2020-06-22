import React, { useState } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";

function App() {
  const [montanteInicial, setMontanteInicial] = useState(0);
  const [taxaJuros, setTaxaJuros] = useState(0);
  const [periodo, setPeriodo] = useState(1);

  const onChangeMontanteInicial = (e) => setMontanteInicial(e.target.value);
  const onChangeTaxaJuros = (e) => setTaxaJuros(e.target.value);
  const onChangePeriodo = (e) => setPeriodo(e.target.value);

  return (
    <div>
      <h1 className="center">React - Juros Compostos</h1>

      <Form
        montanteInicial={montanteInicial}
        taxaJuros={taxaJuros}
        periodo={periodo}
        onChangeMontanteInicial={onChangeMontanteInicial}
        onChangeTaxaJuros={onChangeTaxaJuros}
        onChangePeriodo={onChangePeriodo}
      />

      <Installments
        montanteInicial={montanteInicial}
        taxaJuros={taxaJuros}
        periodo={periodo}
      />
    </div>
  );
}

export default App;
