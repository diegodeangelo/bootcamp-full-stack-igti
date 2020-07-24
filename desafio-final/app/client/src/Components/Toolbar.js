import React from 'react';
import "./Toolbar.css";

export default function Toolbar() {
  return (
    <div class="row">
      <div class="col s12">
        <div class="input-field col s12" className="fields">
          <a class="aves-effect waves-light btn"><i class="material-icons left">add</i> Novo lançamento</a>
          <input placeholder="Filtro" type="text" class="validate" />
        </div>
      </div>
    </div>
  )
}
