import React from 'react'
import renderer from 'react-test-renderer'
import Nav from './Nav.js';
import MockRouter from 'react-mock-router';

const location = { key: ''};

describe('nav snapshot test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MockRouter location={location}><Nav location={location}/></MockRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
