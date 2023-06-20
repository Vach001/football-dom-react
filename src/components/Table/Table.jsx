import { Component } from "react";
import styles from "./Table.module.css"

class Table extends Component {
  constructor(props) {
    super(props);

    this.text = props.text;
  }

  render() {
    return (
      <div className={styles.table}>
        <h1>Table working</h1>
      </div>
    );
  }
}

export default Table;
