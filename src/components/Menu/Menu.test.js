import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import App from '../App/App';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Menu', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('can change the news category based on user input', () => {
    const {getByText} = render(<App/>);
    fireEvent.click(getByText('HEALTH'));
    expect(getByText('HEALTH NEWS:')).toBeInTheDocument();
  })

  it('can change the articles displayed multiple times', () => {
    const {getByText} = render(<App />);
    fireEvent.click(getByText('HEALTH'));
    expect(getByText('HEALTH NEWS:')).toBeInTheDocument();
    fireEvent.click(getByText('TECHNOLOGY'));
    expect(getByText('TECHNOLOGY NEWS:')).toBeInTheDocument();
    fireEvent.click(getByText('LOCAL'));
    expect(getByText('LOCAL NEWS:')).toBeInTheDocument();
  })
})
