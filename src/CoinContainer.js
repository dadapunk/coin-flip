import React, { Component } from 'react'
import head from "./images/head-coin.png"
import tail from "./images/tail-coin.png"
import {choice} from "./helpers"
import Coin from './Coin'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: head},
            {side: "tails", imgSrc: tail}
        ]
    };
    constructor(props){
        super(props);
        this.state = { 
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
        const newCoin = choice(this.props.coins); 
        this.setState(st =>{
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
              };
        })
    }
    handleClick(e){
        this.flipCoin();
    }

    render(){
        return (
            <div className="CoinContainer">
                <h2>Lanza la moneda!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Click me!</button>
                <p>De {this.state.nFlips} lanzamientos, han salido {this.state.nHeads} caras
                 y {this.state.nTails} sellos</p>
            </div>
        )
    }

}
export default CoinContainer;