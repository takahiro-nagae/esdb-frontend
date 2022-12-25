import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { About } from './about';
import { AppHistory } from './appHistory';
import { PrivacyPolicy } from './privacyPolicy';

describe('snapshot test', () => {
    test('about', () => {
        const ss = TestRenderer.create(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        ).toJSON();
        expect(ss).toMatchSnapshot();
    });

    test('appHistory', () => {
        const ss = TestRenderer.create(
            <BrowserRouter>
                <AppHistory />
            </BrowserRouter>
        ).toJSON();
        expect(ss).toMatchSnapshot();
    });

    test('privacyPolicy', () => {
        const ss = TestRenderer.create(
            <BrowserRouter>
                <PrivacyPolicy />
            </BrowserRouter>
        ).toJSON();
        expect(ss).toMatchSnapshot();
    });
});
