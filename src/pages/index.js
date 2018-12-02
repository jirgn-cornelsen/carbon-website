import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'gatsby';
import Layout from '../components/Layouts';
import { ClickableTile } from 'carbon-components-react';

import sketchIcon from '../content/homepage/images/sketch-icon.svg';
import githubIcon from '../content/homepage/images/github-icon.svg';
import codepenIcon from '../content/homepage/images/codepen-icon.svg';
import sandboxIcon from '../content/homepage/images/sandbox-icon.svg';
import componentsIll from '../content/homepage/images/components.png';
import gettingStartedIll from '../content/homepage/images/getting-started.png';
import resourcesIll from '../content/homepage/images/resources.png';
import styleIll from '../content/homepage/images/style.png';
import scatter from '../content/homepage/images/scatter.svg';

import '../polyfills';

const sectionHeader = (
  <section
    className="overview-page__banner"
    aria-label="overview page banner">
    <h1 className="banner__logo">
      <span className="banner__logo--bold">Cornelsen</span> Design System
    </h1>
    <Link
      to="/components/overview"
      className="bx--btn bx--btn--secondary banner__cta-btn">
      Explore the system
    </Link>
  </section>
);

class IndexPage extends React.Component {
  componentDidMount() {
    document.title = 'Carbon Design System';
  }

  handleClick = cat => {
    ReactGA.event({
      category: cat,
      action: 'Clicked link',
    });
  };

  interpolate = (a, b) => {
    return (
      (a = +a),
      (b -= a),
      t => {
        return a + b * t;
      }
    );
  };

  render() {
    return (
      <Layout>
        <main
          id="maincontent"
          role="main"
          className="overview-page"
          tabIndex="-1">
          {sectionHeader}
          <section
            aria-label="overview page section 1"
            className="overview-page__section">
            <ul className="overview-page__list">
              <li className="overview-page__list-item">
                <Link
                  to="/getting-started/designers"
                  aria-label="Getting started"
                  className="list-item__link">
                  <img src={gettingStartedIll} alt="" />

                  <div className="list-item__info">
                    <span className="list-item__heading">Getting Started</span>
                    <p>
                      Onboarding for designers and developers who are using
                      the system for the first time.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="overview-page__list-item">
                <Link
                  to="/components/overview"
                  aria-label="Components"
                  className="list-item__link">
                  <img src={componentsIll} alt="" />
                  <div className="list-item__info">
                    <span className="list-item__heading">Components</span>
                    <p>
                      A library of all components, comprised of code,
                      usage and style guidelines.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="overview-page__list-item">
                <Link
                  to="/resources"
                  aria-label="Resources"
                  className="list-item__link">
                  <img src={resourcesIll} alt="" />
                  <div className="list-item__info">
                    <span className="list-item__heading">Resources</span>
                    <p>
                      A helpful list of tools, links and downloads that will
                      improve a user's workflow.
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </Layout>
    );
  }
}

export default IndexPage;
