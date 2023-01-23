import React, { Component } from "react";
import Coin from "./Coin";

class FlipCoin extends Component {
  constructor(props) {
    super(props);
    this.state = { flips: 0, side: 0, heads: 0, tails: 0 };
    this.flip = this.flip.bind(this);
  }

  flip() {
    // Generate random number between 0 and 1
    let curSide = Math.floor(Math.random() * 2);

    // increment flips value
    this.setState((curState) => ({ flips: curState.flips + 1 }));

    // increment heads/tails value
    if (curSide === 0) {
      this.setState((curState) => ({ heads: curState.heads + 1 }));
    } else {
      this.setState((curState) => ({ tails: curState.tails + 1 }));
    }

    // set coin to current side
    this.setState({ side: curSide });
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <Coin side={this.state.side} flips={this.state.flips} />
        <button onClick={this.flip}>FLIP ME</button>
        <p>
          Out of {this.state.flips} flips, there have been {this.state.heads}{" "}
          heads and {this.state.tails} tails.
        </p>
      </div>
    );
  }
}

export default FlipCoin;
