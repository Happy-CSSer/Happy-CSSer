import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    inBox: false,
  }

  onInBoxPress = () => this.setState({ inBox: true });

  onOutBoxPress = () => this.setState({ inBox: false });

  render() {
    const { inBox } = this.state;

    return (
      <div>
        <div className={`toolbar${inBox ? '' : ' hidden'}`}>
          <div className="cancel" onClick={this.onOutBoxPress}>
            X
          </div>
        </div>
        <div className={`toolbar${inBox ? ' hidden' : ''}`}>
          <div className="pokeball" onClick={this.onInBoxPress}>
            <div className="pokeballTop" />
            <div className="pokeballBottom" />
            <div className="pokeballWrap">
              <div className="pokeballCenter" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
