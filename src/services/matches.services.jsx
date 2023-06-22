import { Component } from "react";
import { calcClubStat } from "../helpers/calcStats.helpers.jsx";

export default class getClubsStat extends Component {
  constructor(props, matches = [], { WIN, DRAW, LOSE }) {
    super(props);
    this.matches = props.matches;
    this.WIN = props.WIN;
    this.DRAW = props.DRAW;
    this.LOSE = props.LOSE;
  }
  render() {
    const defoultStat = {
      mp: 0,
      w: 0,
      d: 0,
      l: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      pts: 0,
    };
    return this.matches.reduce((acc, { team1, team2, score }) => {
      const team1Stat = acc[team1] ?? { ...defoultStat };
      const team2Stat = acc[team2] ?? { ...defoultStat };

      const [team1Score, team2Score] = score.ft;

      const clubsResult = {
        team1: this.DRAW,
        team2: this.DRAW,
      };

      if (team1Score > team2Score) {
        clubsResult.team1 = this.WIN;
        clubsResult.team2 = this.LOSE;
      } else if (team1Score < team2Score) {
        clubsResult.team1 = this.LOSE;
        clubsResult.team2 = this.WIN;
      }
      acc[team1] = calcClubStat(
        team1Stat,
        [team1Score, team2Score],
        clubsResult.team1
      );
      acc[team2] = calcClubStat(
        team2Stat,
        [team2Score, team1Score],
        clubsResult.team2
      );

      return acc;
    }, {});
  }
}
