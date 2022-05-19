import React from "react";
import TestRenderer from 'react-test-renderer';
import { SearchFormContainer } from "./searchFormContainer";
import { BrowserRouter } from "react-router-dom";

it( 'snapshot test', () => {
    const ss = TestRenderer.create( <BrowserRouter><SearchFormContainer/></BrowserRouter> ).toJSON();
    expect( ss ).toMatchSnapshot();
} );