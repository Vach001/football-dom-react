import React, { Component } from "react";
import styles from "./Club.module.css"

export default class Club extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.clubData = props.clubData;
    this.position = props.position;

    const { name, image, stats } = this.clubData;
  }

  
  render() {
    return (
    <div className="club">
      ClubTitle,
      {/* ClubInfo({this.name, this.image}),
      ClubPoinds({ this.stats })       */}
            </div>);
  }

}

ClubTitle = <h4 className = {styles.clubContent}>
{this.position ?? "-"}
</h4> 