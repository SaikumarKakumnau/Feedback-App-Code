// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onChangeEmoji = () => {
    this.setState({isClicked: true})
  }

  renderFeedBackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="question-container">
        <h1 className="question-heading">
          How Satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onChangeEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-image"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankyouResponse = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isClicked ? this.thankyouResponse() : this.renderFeedBackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
