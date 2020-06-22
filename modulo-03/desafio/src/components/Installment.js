import React from "react";

export default function Installment({ number, value }) {
  return (
    <div className="col m2">
      <div className="card">
        <div className="card-content">
          <div>{number}</div>
          <div>{value}</div>
        </div>
      </div>
    </div>
  );
}
