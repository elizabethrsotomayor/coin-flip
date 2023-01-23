import React, { Component } from "react";
import heads from "./heads.png";
import tails from "./tails.png";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div>
        <img
          className={this.props.flips === 0 ? "Coin-hidden" : "Coin"}
          src={this.props.side === 0 ? heads : tails}
          alt="Coin"
        />
      </div>
    );
  }
}

export default Coin;
