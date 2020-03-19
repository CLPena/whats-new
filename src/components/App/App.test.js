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

  it('renders local news articles on load', () => {
    const {getByText} = render(<App/>);
    expect(getByText('LOCAL NEWS:')).toBeInTheDocument();
  });

  it('has an image in each article card', () => {
    const {getByAltText} = render(<App/>);
    expect(getByAltText('The Who postpones Denver Concert at the Pepsi Center')).toBeInTheDocument();
  });

  it('has a headline in each article card', () => {
    const {getByText} = render(<App/>);
    expect(getByText('The Who postpones Denver Concert at the Pepsi Center')).toBeInTheDocument();
  });

  it('has an article preview in each article card', () => {
    const {getByText} = render(<App/>);
    expect(getByText('Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.')).toBeInTheDocument();
  });

  it('has a link to read more in each article card', () => {
    const {getAllByText} = render(<App/>);
    expect(getAllByText('READ MORE'));
  });
})
