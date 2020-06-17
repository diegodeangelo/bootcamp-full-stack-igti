import React, { Component } from "react";

export default class ProgressBarSalary extends Component {
  render() {
    const { discountINSS, discountIRPF, netSalary, fullSalary } = this.props;

    const discountINSSRatio = discountINSS / fullSalary;
    const discountIRPFRatio = discountIRPF / fullSalary;
    const netSalaryRatio = netSalary / fullSalary;

    const discountINSSStyles = {
      backgroundColor: "#e67e22",
      width: `${discountINSSRatio * 100}%`,
      height: "30px",
    };

    const discountIRPFStyles = {
      backgroundColor: "#c0392b",
      width: `${discountIRPFRatio * 100}%`,
      height: "30px",
    };

    const netSalaryStyles = {
      backgroundColor: "#16a085",
      width: `${netSalaryRatio * 100}%`,
      height: "30px",
    };

    return (
      <div id="progress-bar">
        <div style={discountINSSStyles}></div>
        <div style={discountIRPFStyles}></div>
        <div style={netSalaryStyles}></div>
      </div>
    );
  }
}
