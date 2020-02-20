import React, { Component } from 'react';
import _ from 'lodash';

class Match extends Component {
    matchAlgorithm = () => {
        let match = _.sample([true, false]);
        return match ? (
            <h1 className="match">
                It's a .match()!
                <br />
                Start coding together!
            </h1>
        ) : (
            <div className="not-match">
                <h1>
                    Sorry, console.error()
                    <br />
                    not a .match()
                </h1>
                <h2>Debugging in progress...</h2>
            </div>
        );
    };

    render() {
        return <div className="match-container">{this.matchAlgorithm()}</div>;
    }
}

export default Match;
