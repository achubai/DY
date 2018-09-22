import React, { Component } from 'react';
import styled from 'styled-components';
import Context from './Context';
import { MENU_IDS } from './constants';
import YouTubeVideo from '../shared/YouTubeVideo';

const Content = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: #eee;
  border: 2px solid #ccc;
  border-radius: 4px;
  overflow: auto;
  padding: 20px;
`;

class ActionContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Context.Consumer>
        {({ state }) => (
          <React.Fragment>
            {state.activeContent === MENU_IDS.aboutText && (
              <Content>
                <h4>OUR MISSION</h4>
                <h2>BECOME THE WORLD’S LEADING PERSONALIZATION OS</h2>
                <p>
                  Dynamic Yield’s advanced machine learning engine builds
                  actionable customer segments in real time, enabling marketers
                  to increase revenue via personalization, recommendations,
                  automatic optimization & 1:1 messaging.
                </p>
                <h5>Why Dynamic Yield Stands Out</h5>
                <p>
                  Dynamic Yield’s AI-powered omnichannel personalization engine
                  helps businesses personalize every customer interaction to
                  improve performance and overall customer satisfaction
                </p>
                <ul>
                  <li>
                    <b>Personalize Anywhere</b> – Personalize every channel and
                    touchpoint with our omnichannel personalization platform
                  </li>
                  <li>
                    <b>Business Impact</b> – Drive significant results and
                    uplift with our AI-powered personalization engine
                  </li>
                  <li>
                    <b>Built for Scale </b>– Scale your personalization efforts
                    with our unified, easy-to-use personalization platform
                  </li>
                  <li>
                    <b>Agility</b> – Accelerate your personalization campaigns
                    and move quickly from idea to execution
                  </li>
                  <li>
                    <b>Open Architecture</b> – Flexible, open architecture to
                    easily integrate with all of your other platforms
                  </li>
                </ul>
              </Content>
            )}
            {state.activeContent === MENU_IDS.promoVideo && (
              <Content>
                <YouTubeVideo src="https://www.youtube.com/embed/Iu3PQ9EQ5bk" />
              </Content>
            )}
            {state.activeContent === MENU_IDS.customerVideo && (
              <Content>
                <YouTubeVideo src="https://www.youtube.com/embed/nV_B04qW7dQ" />
              </Content>
            )}
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}

export default ActionContent;
