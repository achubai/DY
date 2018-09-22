import React, { Component } from 'react';

const Context = React.createContext();
export class Provider extends Component {
  state = {
    toggled: false,
    activeContent: null,
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          handleToggle: () =>
            this.setState({
              toggled: !this.state.toggled,
              activeContent: this.state.toggled
                ? null
                : this.state.activeContent,
            }),
          handleContent: id =>
            this.setState({
              activeContent: this.state.activeContent !== id ? id : null,
            }),
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
