import React, { Component } from "react";
import styles from "./Club.module.css"

export default class Club extends Component {
  constructor(props, clubData, position) {
    super(props, clubData, position);

    this.props = props;
    this.clubData = props.clubData;
    this.position = props.position;

    // const { name, image, stats } = this.clubData;

  }

  
  render() {
    return (
    <div className = {styles.club}>

      <h4 className = {styles.clubContent}>
      {this.position ?? "-"}
      </h4> 
      {/* ClubInfo({this.name, this.image}), */}
      {/* ClubPoinds({ this.stats })       */}
            </div>);
  }

}

