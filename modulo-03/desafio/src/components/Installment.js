import React from "react";
import styles from "./Installment.module.css";
import { formatCurrency, formatPercent } from "../helpers/format";

export default function Installment({
  number,
  taxa,
  presentValue,
  currentValue,
}) {
  const deltaValue = currentValue - presentValue;
  const ratioDeltaValue = presentValue !== 0 ? deltaValue / presentValue : 0;

  return (
    <div className="col m2">
      <div className="card">
        <div className={"card-content " + styles.flexRow}>
          <div className={styles.index}>{number}</div>
          <div className={styles.info}>
            <span
              className={`${styles.infoItems} ${styles.currentValue} ${
                taxa < 0 ? styles.negative : ""
              }`}
            >
              {formatCurrency(currentValue)}
            </span>
            <span
              className={`${styles.infoItems} ${styles.deltaValue} ${
                taxa < 0 ? styles.negative : ""
              }`}
            >
              {deltaValue > 0
                ? "+" + formatCurrency(deltaValue)
                : formatCurrency(deltaValue)}
            </span>
            <span
              className={`${styles.infoItems} ${styles.ratioDeltaValue} ${
                ratioDeltaValue < 0 ? styles.negative : ""
              }`}
            >
              {formatPercent(ratioDeltaValue)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
