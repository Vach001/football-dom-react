import { Component } from "react";
import styles from "./ClubPoints.module.css";

export default class ClubPoinds extends Component {
  constructor(props, stats) {
    super(props);
    this.stats = stats;
  }

  render() {
    return (
      <div className={styles.clubPoints}>
        {Object.values(this.stats).map((stat) => {
          <h4 className={styles.clubContent}>{stat}</h4>;
        })}
      </div>
    );
  }
}
