import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  render() {
    return (
      <div className="body-container">
        <h1 className="heading">Welcome</h1>
        <p className="para-text">Thank you! Happy Learning</p>
        <div className="button-container">
          <button
            className="button"
            type="button"
            onClick={this.subscribeClick}
          >
            Subscribe
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
