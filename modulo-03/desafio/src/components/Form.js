import React from "react";

export default function Form(props) {
  const {
    montanteInicial,
    taxaJuros,
    periodo,
    onChangeMontanteInicial,
    onChangeTaxaJuros,
    onChangePeriodo,
  } = props;

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s4">
            <input
              id="montante-inicial"
              type="number"
              step="100"
              value={montanteInicial}
              onChange={onChangeMontanteInicial}
            />
            <label htmlFor="montante-inicial">Montante Inicial</label>
          </div>
          <div className="input-field col s4">
            <label htmlFor="taxa-juros">Taxa de juros</label>
            <input
              id="taxa-juros"
              type="number"
              step="0.1"
              value={taxaJuros}
              onChange={onChangeTaxaJuros}
            />
          </div>
          <div className="input-field col s4">
            <label htmlFor="periodo">Período (meses)</label>
            <input
              id="periodo"
              type="number"
              min="1"
              value={periodo}
              onChange={onChangePeriodo}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
