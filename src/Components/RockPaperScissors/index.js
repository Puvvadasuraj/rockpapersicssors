import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import {Heading} from './styledComponents'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
const URLS = {
  ROCK:
    'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  PAPER:
    'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  SCISSORS:
    'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
}
class RockPaperScissors extends Component {
  state = {score: 0, display: true, item1: '', item2: '', status: ''}

  checkingState = item => {
    this.setState({display: false})
    const randomItem = Math.floor(Math.random() * 3)
    const computerChoices = ['ROCK', 'PAPER', 'SCISSORS']
    this.setState({item1: URLS[item], item2: URLS[computerChoices[randomItem]]})
    if (item === 'ROCK') {
      if (computerChoices[randomItem] === 'ROCK') {
        this.setState({status: 'DRAW'})
      } else if (computerChoices[randomItem] === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          status: 'LOSE',
        }))
      } else if (computerChoices[randomItem] === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          status: 'WIN',
        }))
      }
    } else if (item === 'PAPER') {
      if (computerChoices[randomItem] === 'PAPER') {
        this.setState({status: 'DRAW'})
      } else if (computerChoices[randomItem] === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          status: 'LOSE',
        }))
      } else if (computerChoices[randomItem] === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          status: 'WIN',
        }))
      }
    } else if (item === 'SCISSORS') {
      if (computerChoices[randomItem] === 'SCISSORS') {
        this.setState({status: 'DRAW'})
      } else if (computerChoices[randomItem] === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          status: 'LOSE',
        }))
      } else if (computerChoices[randomItem] === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          status: 'WIN',
        }))
      }
    }
  }

  reset = () => {
    this.setState({display: true})
  }

  displayFunction = () => {
    const {item1, item2, status} = this.state
    let state = ''
    console.log(status)
    if (status === 'DRAW') {
      state = 'IT IS DRAW'
    } else if (status === 'WIN') {
      state = 'YOU WON'
    } else {
      state = 'YOU LOSE'
    }
    return (
      <>
        <div className="resultContainer">
          <div className="resultItem">
            <h1 className="name">YOU</h1>
            <img className="rockItem" src={item1} alt="your choice" />
          </div>
          <div className="resultItem">
            <h1 className="name">OPPONENT</h1>
            <img className="rockItem" src={item2} alt="opponent choice" />
          </div>
        </div>
        <p className="name"> {state}</p>
        <button type="button" className="resultBut" onClick={this.reset}>
          Play again
        </button>
      </>
    )
  }

  callingRock = () => {
    this.checkingState('ROCK')
  }

  callingPaper = () => {
    this.checkingState('PAPER')
  }

  callingScissors = () => {
    this.checkingState('SCISSORS')
  }

  mainFunction = () => {
    const {score, display} = this.state
    return (
      <div className="container">
        <div className="scoreContainer">
          <div>
            <h1 className="name">Rock Paper Scissors</h1>
          </div>
          <div className="scoreBox">
            <p>Score</p>
            <Heading>{score}</Heading>
          </div>
        </div>
        {display && (
          <ul className="rockItemsContainer">
            <button
              type="button"
              className="buttonClass"
              data-testid="rockButton"
              onClick={this.callingRock}
            >
              <img
                className="rockItem"
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
              />
            </button>
            <button
              type="button"
              className="buttonClass"
              data-testid="scissorsButton"
              onClick={this.callingScissors}
            >
              <img
                className="rockItem"
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
              />
            </button>
            <button
              type="button"
              className="buttonClass"
              data-testid="paperButton"
              onClick={this.callingPaper}
            >
              <img
                className="rockItem"
                src={choicesList[2].imageUrl}
                alt={choicesList[2].id}
              />
            </button>
          </ul>
        )}
        {!display && this.displayFunction()}
        <div className="ruleContainer">
          <Popup
            modal
            trigger={
              <button type="button" className="rulesBox">
                Rules
              </button>
            }
          >
            {close => (
              <>
                <div className="popContainer">
                  <RiCloseLine onClick={() => close()} className="popClose" />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="popImg"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }

  render() {
    return <div>{this.mainFunction()}</div>
  }
}

export default RockPaperScissors
