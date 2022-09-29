import React from 'react'
import renderer from 'react-test-renderer'

import ActionBar from './ActionBar'

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: node => node,
  };
});

it('renders the component', () => {
  const onClickFunction = jest.fn()
  const output = renderer.create(<ActionBar hoverMessage="Abc" onClick={onClickFunction} testId="action-bar">ActionBar</ActionBar>).toJSON();

  expect(output).toMatchSnapshot();
});