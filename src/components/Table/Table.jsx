import { Component } from "react";
import styles from "./Table.module.css";
import TableHeader from "../data-display/TableHeader/TableHeader.jsx";
import TableLiner from "../data-display/TableLiner/TableLiner";
import Club from "../../components/Club/Club.jsx";


class Table extends Component {
  constructor(props) {
    super(props);

    this.text = props.text;
  }

  render() {
    return (
      <div className={styles.table}>
        <TableHeader
          src="https://logos-world.net/wp-content/uploads/2023/02/Premier-League-Symbol.png"
          title="Premier League"
          description="Season 2020-2021"
        />
        <TableLiner />
        <Club/>
      </div>
    );
  }
}

export default Table;
