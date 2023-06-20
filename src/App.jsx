import { Component } from "react";
import "./App.css";
import TableHeader from "./components/data-display/TableHeader/TableHeader";
import Club from "./components/Club/Club";

class App extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <TableHeader
          src="https://logos-world.net/wp-content/uploads/2023/02/Premier-League-Symbol.png"
          title="Premier League"
          description="Season 2020-2021"
        />
        <Club/>
      </div>
    );
  }
}

export default App;
