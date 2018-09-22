import React, { Component } from 'react';

class SiteIframe extends Component {
  componentDidMount() {
      const iframe = document.createElement('iframe');
      iframe.onload = () => { this.props.handleLoad() };
      iframe.frameBorder = '0';
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.src = 'https://www.dynamicyield.com/';
      document.getElementById('root').replaceChild(iframe, document.getElementById('iframe'));
  }

  render() {
    return (
      <div id="iframe"/>
    );
  }
}

export default SiteIframe;
