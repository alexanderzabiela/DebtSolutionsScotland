import React from 'react';
import MediaQuery from 'react-responsive';
import Accordion from 'react-responsive-accordion';

import CenterTitle from 'components/CenterTitle';
import LeftParagraph from 'components/LeftParagraph';
import Button from 'components/Button';

class MobileAccordion2 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  contact = () => {
    const elmnt = document.getElementById("calculator");
    elmnt.scrollIntoView();
  };

  render() {
    return (
      <div className="mobileAccordion" id="mobileAccordion2">
        <Accordion startPosition={-1}>
        <div data-trigger="How a Trust Deed works">
            <LeftParagraph>
              Fill out the form to see if you qualify for a trust deed, once your details have been submitted we will introduce you to one of our FCA authorised partners, they will then contact you to go through a financial review to calculate an affordable monthly payment which will replace your existing repayments towards your unsecured creditors. Once you are happy with this figure then the relevant information will be sent you and you will be required to send return with some supporting documents for evidence however this will be discussed in detail on the initial phone call.
            </LeftParagraph>
            <LeftParagraph>
              Once your documents have been received this will begin the process for your trust deed and your details will then be handed over to a dedicated licensed insolvency practitioner who will then send your proposal to your creditors detailing how much you purpose to pay, how any assets will be dealt with and how much the creditors will receive over the duration of the trust deed planned agreement. Once the proposal has been submitted the creditors then have up five weeks from the date your details were entered to vote for or against your trust deed becoming protected, if your creditors do not respond within this period it is treated as having been accepted.
            </LeftParagraph>
            <LeftParagraph>
              Once the trust deed is granted it becomes legally binding for both parties which means you maintain the agreed monthly repayments each month for the duration of the term (usually 48 months * although in certain circumstances this can be extended however you will be informed in detail prior to the application being proposed). Within the terms of the trust deed the creditors will agreed to freeze all interest and charges and you will also be protected from any future creditor contact.
            </LeftParagraph>
            <LeftParagraph>
              After the agreed period is over and your last payment is made into the trust deed you will be discharged from your debts which were covered within the trust deed as long as all terms have been met. Once discharged any remaining debt will legally be written off, you may not be able to obtain credit immediately after being discharged.
            </LeftParagraph>
           
          </div>
          <div data-trigger="">
            <CenterTitle></CenterTitle>
          </div>
        </Accordion>
      </div>
    );
  }
}

export default MobileAccordion2;