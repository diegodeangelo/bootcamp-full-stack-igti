import React from 'react';
import './Transaction.css';

export default function Transaction() {
  return (
    <tr>
      <td className="numeracao">01</td>
      <td className="descricao">
        <span className="titulo">Lazer</span>
        <span>Viagem para a praia</span>
      </td>
      <td className="valor">R$ 10,00</td>
      <td className="actions">
        <a class="waves-effect waves-teal btn-flat">
          <i class="material-icons">edit</i>
        </a>
        <a class="waves-effect waves-teal btn-flat">
          <i class="material-icons">delete</i>
        </a>
      </td>
    </tr>
  )
}
