import React, { Component } from 'react'
import PubSub from 'pubsub-js'

class PlayerButtons extends Component {

    renderCommentButton = () => {
        return <a onClick={this.comment} className="btn-floating btn-large waves-effect waves-light blue">
                    <i className="material-icons large">add</i>
                </a>
    }

    renderPlayPause(){
        return this.props.playing ? 'pause' : 'play_arrow'
    }
    backTen = () => {
        this.props.seek(-10)
    }
    backThirty = () => {
        this.props.seek(-30)
    }
    forwardTen = () => {
        this.props.seek(10)
    }
    forwardThirty = () => {
        this.props.seek(30)
    }
    comment = () => {
        PubSub.publish('ADD_COMMENT', 'add_comment')
    }

    render(){
        return <div className="player-buttons-container">
                    <a onClick={this.backTen} className="btn-floating btn-large waves-effect waves-light green">
                        <i className="material-icons large">replay_10</i>
                    </a>

                    <a onClick={this.backThirty} className="btn-floating btn-large waves-effect waves-light green">
                        <i className="material-icons large">replay_30</i>
                    </a>

                    <a onClick={this.props.togglePlay} className="btn-floating btn-large waves-effect waves-light green">
                        <i className="material-icons large">{`${this.renderPlayPause()}`}</i>
                    </a>

                    <a onClick={this.forwardTen} className="btn-floating btn-large waves-effect waves-light green">
                        <i className="material-icons large">forward_10</i>
                    </a>

                    <a onClick={this.forwardThirty} className="btn-floating btn-large waves-effect waves-light green">
                        <i className="material-icons large">forward_30</i>
                    </a>

                    {localStorage.getItem('token') && this.renderCommentButton()}
                </div>
    }
}

export default PlayerButtons
