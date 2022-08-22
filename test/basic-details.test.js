import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const el = await fixture(html`<basic-details></basic-details>`);
const myFuctionStub = Sinon.stub(el, '_captureDetails');


describe('Basic details', () => {

   it('check for accessebility', () => {
        expect(el).to.be.accessible;
    });

    it('capturedetails click button', async() => {
        el.requestUpdate();
        await el.updateComplete;
        el.shadowRoot.querySelector('lion-button').click();
        expect(myFuctionStub).to.have.callCount(0);
    });

    it('toDashboard click button', async () => {
        const myFunction = Sinon.stub(el, '_toDashboard');
        el.requestUpdate();
        await el.updateComplete;
        el.shadowRoot.querySelector('lion-button').click();
        expect(myFunction).to.have.callCount(1);
    });

    it('check for id', async() => {
        const el = await fixture('<div id = "word"></div>');
        expect(el.id).to.equal('word');
    });

});
