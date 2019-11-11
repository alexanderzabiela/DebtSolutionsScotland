/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import CookieConsent from "react-cookie-consent";
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/** Page Imports */
import HomePage from 'containers/HomePage/Loadable';
import PrivacyPage from 'containers/PrivacyPage';
import CookiePage from 'containers/CookiePolicy';
import ConfirmationPage from 'containers/Confirmation';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

/** Component Imports */
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Capabilities from 'components/Capabilities';

import Lato from '../../fonts/Lato-Regular.woff';
import LatoBold from '../../fonts/Lato-Bold.woff';

import './css/transitions.scss';
// import PrivacyPage from '../PrivacyPage';

/**
 * Styled Wrapper Components
 */
const AppWrapper = styled.div`
margin: 0 auto;
display: block;
min-height: 100%;
padding: 0 0;
flex-direction: column;
@font-face {
  font-family: 'Lato';
  src: url('${Lato}') format('opentype');
};
@font-face {
  font-family: 'Lato Bold';
  src: url('${LatoBold}') format('opentype');
  font-weight: bold;
};
font-family: 'Lato';

& * {
  font-family: 'Lato';
}
`;


/**
 * Create a route list and loop through them below.
 */

export default function App() {
  const clientLogos = [

  ];
  const clientLogosTemp = [

  ];
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 200 };

  const routes = (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/privacy" component={PrivacyPage} />
      <Route exact path="/cookies" component={CookiePage} />
      <Route exact path="/thanks" component={ConfirmationPage} />
    </div>
  )


  return (
    <TransitionGroup component="main" className="page-main">
      <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
        <AppWrapper>
          <CookieConsent
            location="bottom"
            buttonText="Okay got it"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          >
          <div>
            <span>We use cookies to optimise your experience on our site. By continuing to browse you give consent for cookies to be used. For more details please read our <a style={{ color: 'white', textDecoration: 'underline' }} href="/cookies">cookie policy</a> </span>
          </div>
          </CookieConsent>

          <Helmet
            titleTemplate="%s - Debt Solutions Scotland"
            defaultTitle="Debt Solutions Scotland"
          >
      
          </Helmet>
          <Navigation />
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/privacy" component={PrivacyPage} />
              <Route exact path="/cookies" component={CookiePage} />
              <Route exact path="/thanks" component={ConfirmationPage} />
              <Route component={NotFoundPage} />
          </Switch>
          {/* <StaticRouter style={{ float: 'left' }} context={{}}>
          <div>
            {routes}
          </div>
          </StaticRouter> */}

        {/* <ClientBlock clientLogos={clientLogos} />
          <Capabilities /> */}
        <Footer />
        </AppWrapper>
      </CSSTransition>
    </TransitionGroup >
  );
}
