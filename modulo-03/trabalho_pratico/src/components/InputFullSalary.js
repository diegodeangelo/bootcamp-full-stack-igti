import React, { Component } from "react";

export default class InputFullSalary extends Component {
  render() {
    const { value, descricao } = this.props;

    return (
      <div>
        <label>{descricao}</label>
        <input
          type="number"
          value={value !== 0 ? value : ""}
          onChange={this.props.handleChange}
          placeholder="Digite seu salário bruto aqui"
        />
      </div>
    );
  }
}
