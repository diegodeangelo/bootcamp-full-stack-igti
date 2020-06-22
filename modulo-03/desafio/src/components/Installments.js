import React, { useEffect, useState } from "react";
import Installment from "./Installment";

export default function Installments(props) {
  const { montanteInicial, taxaJuros, periodo } = props;

  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    let installments = [];

    for (let i = 1; i <= periodo; i++) {
      installments.push(montanteInicial * (1 + taxaJuros / 100) ** i);
    }

    setInstallments(installments);
  }, [montanteInicial, taxaJuros, periodo]);

  return (
    <div className="row">
      {installments.map((installment, index) => {
        return (
          <Installment
            key={index}
            number={++index}
            taxa={taxaJuros}
            presentValue={montanteInicial}
            currentValue={installment}
          />
        );
      })}
    </div>
  );
}
