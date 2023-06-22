import { Component } from "react";
import { matchResultOption } from "../constants/matches.constants.jsx";

export class calcClubStat extends Component{
  constructor(props, clubStat = {}, scores = [], matchResult) {
    super(props);
    this.clubStat = props.clubStat;
    this.scores = props.scores;
    this.matchResult = props.matchResult;
  }
  render() {
    const defaultStat = {
      ...this.clubStat,
      mp: this.clubStat.mp + 1,
      gf: this.clubStat.gf + this.scores[0],
      ga: this.clubStat.ga + this.scores[1],
    };
    defaultStat.gd = defaultStat.gf - defaultStat.ga;

    switch (this.matchResult) {
      case matchResultOption.WIN:
        defaultStat.w = this.clubStat.w + 1;
        defaultStat.pts = this.clubStat.pts + 3;
        break;
      case matchResultOption.LOSE:
        defaultStat.l = this.clubStat.l + 1;
        break;
      case matchResultOption.DRAW:
        defaultStat.d = this.clubStat.d + 1;
        defaultStat.pts = this.clubStat.pts + 1;
        break;
    }
    return defaultStat;
  }
}
