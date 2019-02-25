import React from 'react';
import App from './App';
import renderer from 'react-test-renderer'
import MockRouter from 'react-mock-router';

window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};


const location = { pathname: 'test' };
describe('app renders', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(<MockRouter location={location}><App /></MockRouter>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
