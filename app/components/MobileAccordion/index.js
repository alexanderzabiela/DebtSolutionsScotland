import React from 'react';
import MediaQuery from 'react-responsive';
import Collapsible from 'react-collapsible';

import CenterTitle from 'components/CenterTitle';
import LeftParagraph from 'components/LeftParagraph';
import Button from 'components/Button';

class MobileAccordion extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  contact = () => {
    const elmnt = document.getElementById("calculator");
    elmnt.scrollIntoView();
  };

  render() {
    return (
      <div id='whatIsATrustDeed' className="mobileAccordion">
        <Collapsible trigger="What is a Trust Deed">
          <LeftParagraph>
            A protected trust deed is a voluntary, but legally binding agreement between an individual (who is struggling to maintain their credit commitments and has more than £6000 of unsecured debt) and their creditors which can only be carried out through a licensed insolvency practitioner (IP), also known as a trustee and is also overseen by the accountant in bankruptcy (AIB). A protected trust deed will be in place for a specific period of time normally 4 years although a longer period can be considered depending on your individual circumstances (the duration will always be agreed at the start of the arrangement).
            </LeftParagraph>
          <LeftParagraph>
            Once the creditors reach an agreement with the individual the protected trust deed then becomes protected allowing the debtor to begin a monthly repayment schedule based on what they can realistically afford whilst all interest and charges are guaranteed to be frozen. At the stage of protection, it protects the individual from any legal enforcement and all creditor contact including letters and phone calls will stop which have been included in the protected trust deed. Once the agreed period of time is over and the final payment is made into the protected trust deed any remaining debts that the debtor owns will be legally written off, which will allow them to become debt free as long as the individual has met all conditions of the agreement subject to some exceptions. If for any reason the creditors don’t agree to your trust deed becoming protected, then other Scottish debt solutions can be explored including a debt arrangement scheme or sequestration.
            </LeftParagraph>
        </Collapsible>
        <Collapsible trigger="How a Trust Deed works">
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
        </Collapsible>
        <Collapsible trigger="Trust Deed Advantages">
          <LeftParagraph>
            <ul className="advantages">
              <li>No upfront fees or charges with a fixed affordable monthly payment.</li>
              <li>Potentially legally write off up to 80% of your debt.</li>
              <li>Creditor contact including legal action will be stopped once protected.</li>
              <li>All interest and charges guaranteed to be frozen.</li>
            </ul>
          </LeftParagraph>
        </Collapsible>
        <Collapsible trigger="Trust Deed Disadvantages">
          <LeftParagraph>
            <ul className="disadvantages">
              <li>Your credit rating will be adversely affected.</li>
              <li>The trust deed will fail if you don’t maintain your monthly payments.</li>
              <li>Secured debts can’t be included into the arrangement.</li>
              <li>Creditors can vote against a trust deed becoming protected.</li>
            </ul>
          </LeftParagraph>
        </Collapsible>
      </div >
    );
  }
}

export default MobileAccordion;