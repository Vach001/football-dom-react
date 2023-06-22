import { Component } from "react";
import aplClubs from "../assets/data/leagues/apl.json" assert { type: "json" };
import aplMatches from "../assets/data/matches/apl.json" assert { type: "json" };
import { matchResultOption } from "../constants/matches.constants.jsx";
import getClubsStat from "./matches.services.jsx";

export class getTable extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const clubStats = getClubsStat(aplMatches.matches, matchResultOption);

    return (Object.keys(clubStats)
      .map((clubName) => {
        const { code } = aplClubs.clubs.find(({ name }) => name === clubName);

        return {
          name: clubName,
          image: code,
          stats: clubStats[clubName],
        };
      })
      .sort((a, b) => b.stats.pts - a.stats.pts));
  }
}