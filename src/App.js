import React, { Component } from 'react';
import ActionMenuComponent from './ActionMenu/ActionMenuComponent';
import SiteIframe from './SiteIframe';
class App extends Component {
  state = {
    actionMenu: false,
  };
  showMenu = () => {
    this.setState({ actionMenu: true });
  };
  render() {
    return (
      <React.Fragment>
        <SiteIframe handleLoad={this.showMenu} />
        {this.state.actionMenu && <ActionMenuComponent />}
      </React.Fragment>
    );
  }
}

export default App;
