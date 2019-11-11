import React from 'react';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';

import PageWrapper from 'components/PageWrapper';
import CenterTitle from 'components/CenterTitle';
import LeftParagraph from 'components/LeftParagraph';
import Wrapper from './Wrapper';

export class PrivacyPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    window.scrollTo(0, 0);

    return (
      <div>
        <Helmet>
          <title>Privacy Policy</title>
          <meta name="description" />
        </Helmet>

        <PageWrapper>
          <CenterTitle style={{ marginTop: '20px' }}>
            Privacy Policy
            </CenterTitle>
          <LeftParagraph>
            www.debtsolutionsscotland.com is the trading style of evolution data ltd are committed to ensuring that your privacy is protected always, this policy explains how we use the information we collect, how you can instruct us if you prefer to limit the use of the information and procedures that we have in place to protect your information.
            </LeftParagraph>
          <LeftParagraph>
            <b>Data protection Act 1998</b>
          </LeftParagraph>
          <LeftParagraph>
            Our data protection registration number is ZA420891, you can check this out yourself at the information commissioner’s office www.ico.org.uk.
            </LeftParagraph>
          <LeftParagraph>
            <b>Information we collect</b>
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
            <b>Personal information – How we use your information </b>
          </LeftParagraph>
          <LeftParagraph>
            By making an enquiry and submitting your details on our website you are giving consent for www.debtsolutionsscotland.com to introduce you to a fully FCA authorised debt solutions companies, we do not store your details beyond this.
            </LeftParagraph>
          <LeftParagraph>
            <b>Your rights to remove or obtain your information from our records</b>
          </LeftParagraph>
          <LeftParagraph>
            You have the right under the data protection act 1998 to remove or obtain any information we hold for you, we will always let you have a copy of all personal information we have for you which is securely stored on our server should you ever want to request it. However, we delete your information at the point of submission therefore it is unlikely we will hold any information for you at the point of request.
            </LeftParagraph>
          <LeftParagraph>
            If you would wish to instruct us to remove from our records or you need us to provide a copy of the information we hold then please send an email to enquiries@debtsolutionsscotland.com and this will be dealt with urgently. For more information about the privacy policy please feel free to contact us.
            </LeftParagraph>
        </PageWrapper>
      </div>
    );
  }
}

export default PrivacyPage;


