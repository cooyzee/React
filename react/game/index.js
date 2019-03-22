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
    history: [
      {squares: Array(9).fill(null)}
    ],
    stepNumber: 0,
    xIsNext: true
  }

  handleClick = (i) => {
    // Note how at here, we call .slice() to create a copy of the squares array to modify instead of modifying the existing array.
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const xIsNext = this.state.xIsNext
    squares[i] = xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{squares}]),
      stepNumber: history.length,
      xIsNext: !xIsNext
    })
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  render() {
    const history = this.state.history
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      if (this.state.stepNumber === 9) {
        status = 'Draw!'
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
      }
    }
    return (
      <div className="game">
        <Board squares={current.squares} click={this.handleClick}/>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

export default Game