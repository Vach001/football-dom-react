import { Component } from "react";
import styles from "./ClubInfo.module.css";

export default class ClubInfo extends Component {
  constructor(props, name, image) {
    super(props)

    this.name = props.name;
    this.image = props.image;
  }

  render() {
    return (
      <div className={styles.clubInfo}>
        <img
          srs={`./src/assets/images/clubs/${this.image ?? "no-club"}.png`}
          alt={this.name}
        />
        <h4 className={styles.clubContent}>{this.name}</h4>
      </div>
    );
  }
}
