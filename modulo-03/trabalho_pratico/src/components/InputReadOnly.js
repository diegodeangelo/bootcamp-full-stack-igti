import React, { Component } from "react";
import { formatPercent, formatCurrency } from "../helpers/utils";

export default class InputReadOnly extends Component {
  render() {
    const { value, ratio, descricao, color } = this.props;

    let valueField = formatCurrency(value);

    if (ratio) {
      valueField += ` (${formatPercent(ratio)})`;
    }

    return (
      <div>
        <label>{descricao}</label>
        <input type="text" value={valueField} style={{ color }} readOnly />
      </div>
    );
  }
}
