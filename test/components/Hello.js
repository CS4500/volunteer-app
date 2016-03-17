// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './../../App/components/Hello.js';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"

describe('Hello Component', () => {
  const renderedComponent = TestUtils.renderIntoDocument(
    <Hello/>
  );

  const dom = ReactDOM.findDOMNode(renderedComponent);


  it('it renders correctly', () => {
    return assert.isOk(renderedComponent);
  });

  it('it says hello', () => {
    const element = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'p'
    )
    assert.match(element.textContent, /(h|H)ello/);
  });
});
