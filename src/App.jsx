import { Component } from "react";
import styles from "./App.css";
import Table from "./components/Table/Table.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div itemID={styles.root}>
        <Table />
      </div>
    );
  }
};