import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";
import { calculateSalaryFrom } from "./helpers/salary";
import InputReadOnly from "./components/InputReadOnly";
import ProgressBarSalary from "./components/ProgressBarSalary";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 0,
      baseINSS: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      netSalary: 0,
    };
  }

  handleChange = (event) => {
    const fullSalary = event.target.value;

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(fullSalary);

    this.setState({
      fullSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    });
  };

  render() {
    const {
      fullSalary,
      discountINSS,
      discountIRPF,
      baseINSS,
      baseIRPF,
      netSalary,
    } = this.state;

    return (
      <div className="container">
        <h1 className="center">React Salário</h1>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <InputFullSalary
                  handleChange={this.handleChange}
                  value={fullSalary}
                  descricao={"Salário Bruto"}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s3">
                <InputReadOnly value={baseINSS} descricao={"Base INSS"} />
              </div>
              <div className="input-field col s3">
                <InputReadOnly
                  value={discountINSS}
                  ratio={discountINSS / fullSalary}
                  descricao="Desconto INSS"
                  color={"#e67e22"}
                />
              </div>
              <div className="input-field col s3">
                <InputReadOnly value={baseIRPF} descricao="Base IRPF" />
              </div>
              <div className="input-field col s3">
                <InputReadOnly
                  value={discountIRPF}
                  ratio={discountIRPF / fullSalary}
                  descricao="Desconto IRPF"
                  color={"#c0392b"}
                />
              </div>
              <div className="input-field col s3">
                <InputReadOnly
                  value={netSalary}
                  ratio={netSalary / fullSalary}
                  descricao="Salário Líquido"
                  color={"#16a085"}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col s12">
            <ProgressBarSalary
              discountINSS={discountINSS}
              discountIRPF={discountIRPF}
              netSalary={netSalary}
              fullSalary={fullSalary}
            />
          </div>
        </div>
      </div>
    );
  }
}
