import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('can change the articles displayed', () => {
    const {getByText} = render(<App />);
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

  it('can search article headlines by a search term', () => {
    const {getByLabelText, getByPlaceholderText, getByText} = render(<App />);
    fireEvent.change(getByPlaceholderText('SEARCH ARTICLES'), {target: {value: 'Giant Chicken'}});
    fireEvent.click(getByLabelText('search-button'));
    expect(getByText('Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner')).toBeInTheDocument();
  })

  it('can search article headlines in uppercase or lowercase', () => {
    const {getByLabelText, getByPlaceholderText, getByText} = render(<App />);
    fireEvent.change(getByPlaceholderText('SEARCH ARTICLES'), {target: {value: 'gIaNt ChIcKeN'}});
    fireEvent.click(getByLabelText('search-button'));
    expect(getByText('Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner')).toBeInTheDocument();
  })
})
