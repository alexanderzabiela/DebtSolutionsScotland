import React from 'react';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';

import PageWrapper from 'components/PageWrapper';
import CenterTitle from 'components/CenterTitle';
import LeftParagraph from 'components/LeftParagraph';
import Wrapper from './Wrapper';

export class CookiePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    window.scrollTo(0, 0);

    return (
      <div>
        <Helmet>
          <title>Cookie Policy</title>
          <meta name="description" />
        </Helmet>

        <PageWrapper>
          <CenterTitle style={{ marginTop: '20px' }}>
            Cookies Policy
            </CenterTitle>
          <LeftParagraph>
            While using www.debtsolutionsscotland.com, some information may be collected automatically using ‘cookies’. These are files small files which help with processing your data and enable us to analyse how the site is being used. There are two types of cookies: temporary cookies, which make up part of the security process while you are using the web site, and permanent cookies, which tell us the link you used to find our website, identify your browser so that we can make sure that our website and services work with your computer or device. This website may use a cookie to track users around our site and to recognise them should they visit the site on several occasions. This will not track nor record any personal information that could be used to identify you. We only use this information for analytical purposes, most browser can be set up not to accept cookies with their privacy settings. If you do not wish cookies to be placed on your PC or device, then you can disable in your web browser. The option to do this is normally found in your web browser settings. Please not that permanently disabling cookies in your browser may hinder your use of our website.
            </LeftParagraph>
          <LeftParagraph>
            We only collect information provided by you, such as name, contact details and debt level to obtain information for a debt solution. We will never hold any of your information, entered on the enquiry form, once the enquiry has been submitted your details will be automatically sent over to a fully authorised debt solution company. These FCA companies will have their own privacy policies and we recommend that you refer to their sites once spoken to them. You have the right to obtain or cancel your enquiry at anytime and any details will be removed.
            </LeftParagraph>
          <LeftParagraph>
            We collect two kinds of information from visitors:
            </LeftParagraph>
          <LeftParagraph>
            <ol>
              <li>Personal information which is provided to us via the enquiry forms on our site.</li>
              <li>Site usage information from cookies (when the use of cookies is accepted by you on the website) which are only used to help us provide a better service. Google analytics may also use the information from the cookie to monitor visits, the information which is captured what link was clicked, keyword searched, geographical location, time spent on site and number of visits. This will not track nor record any personal information that could be used to identify you. We only use this information for analytical purposes, most browser can be set up not to accept cookies with their privacy settings.</li>
            </ol>
          </LeftParagraph>
          <LeftParagraph>
            Further information on this can be found at www.allaboutcookies.org.
          </LeftParagraph>
        </PageWrapper>
      </div>
    );
  }
}

export default CookiePage;


