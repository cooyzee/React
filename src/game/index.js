import React from 'react'
import './game.scss'
import calculateWinner from './calculate'

const Square = ({value, click}) => (
  <button className="square" onClick={click}>
    {value}
  </button>
)

const Board = ({squares, click}) => (
  <div className="game-board">
    {[0, 3, 6].map(x => (
      <div key={x} className="board-row">
        {[0, 1, 2].map(y => <Square key={y} value={squares[x + y]} click={() => click(x + y)}/>)}
      </div>
    ))}
  </div>
)

class Game extends React.Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  }

  handleClick = (i) => {
    // Note how at here, we call .slice() to create a copy of the squares array to modify instead of modifying the existing array.
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({squares, xIsNext: !this.state.xIsNext})
  }

  render() {
    const squares = this.state.squares
    const winner = calculateWinner(squares)
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }
    return (
      <div className="game">
        <Board squares={squares} click={this.handleClick}/>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* todo */}</ol>
        </div>
      </div>
    )
  }
}

export default Game