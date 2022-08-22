import { html, fixture, expect } from '@open-wc/testing';
import * as Sinon from 'sinon';
import '../loan-application.js';

let el;

describe('LoanApplication', () => {
    before(async () => {
        el = await fixture(html`<loan-application></loan-application>`);
    });

    it('Accessible', async () => {
        expect(el).to.be.accessible();
    });

    it('Check for the title type', async () => {
        el = await fixture(html`<dash-board></dash-board>`);
        expect(el.title).to.be.a('string');
    });

    it('Check for the title value', async () => {
        el = await fixture(html`<dash-board></dash-board>`);
        expect(el).shadowDom.to.equal('<loan-header></loan-header><div id = "outlet"></div>')
    });

    it('spy the increment function', () => {
        setTimeout(async () => {
            const spy = Sinon.stub(el, counter);
            expect(spy.callCount).to.equal();
        }, 3000);
    })

    
});
