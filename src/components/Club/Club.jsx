import React, { Component } from "react";
import styles from "./Club.module.css";
import ClubInfo from "../ClubInfo/ClubInfo.jsx";
import ClubPoinds from "../ClubPoints/ClubPoints.jsx";

export default class Club extends Component {
  constructor(props, clubData, position) {
    super(props);

    this.clubData = props.clubData;
    this.position = props.position;

    
  }
  render() {
    // const { name, image, stats } = this.clubData;
    return (
      <div className={styles.club}>
        <h4 className={styles.clubContent}>{this.position ?? "-"}</h4>
        {/* <ClubInfo name = {this.name} image = {this.image}/>
      <ClubPoinds stats = {this.stats}> */}
      </div>
    );
  }
}
