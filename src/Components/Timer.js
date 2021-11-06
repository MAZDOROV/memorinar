import React from 'react';
import { connect } from 'react-redux';

const Timer = ({ time }) => {

    return (
        <div className="timer">
            <span>00:00:{time}</span>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        time: state.game.timer.time
    }
}

export default connect(mapStateToProps, null)(Timer)