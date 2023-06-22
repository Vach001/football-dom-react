import { Component } from "react";
import { linerConstants } from "../../../constants/linerContents.constants.js";

import styles from "./TableLiner.module.css";

export default class TableLiner extends Component {
  render() {
    return (
      <div className={styles.linerSection}>
        <h4 className={styles.title}>Clab</h4>
        {linerConstants.map((constant) => {
          return <h4 className={styles.title}>{constant.toUpperCase()}</h4>;
        })}
      </div>
    );
  }
}
