import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/header/Header.js';

const el = await fixture(html`<loan-header></loan-header>`);
const button = el.shadowRoot.querySelectorAll('button');

describe('loan-header', () => {

    it('Accessible', async () => {
        expect(el).to.be.accessible();
    });

    it('check for the form class form basic', async () => {
        const div = el.shadowRoot.querySelector('div');
        expect(div).to.exist;
        expect(div).to.have.class('container');
    });

    it('check for the color change of button', async () => {
        button[0].click();
        expect(button[0]).to.have.class('bg-btn-color');
    });

    it('check for the color change of button', async () => {
        button[0].click();
        expect(button[1]).to.have.class('btn-cursor');
    });

    it('check for the color change of button', async () => {
        button[1].click();
        expect(button[1]).to.have.class('bg-btn-color');
    });
});
