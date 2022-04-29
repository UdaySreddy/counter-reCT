import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1>
          The button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p>click the button to increase the count!</p>
        <div>
          <button className="button1" onClick={this.onIncrement}>
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
