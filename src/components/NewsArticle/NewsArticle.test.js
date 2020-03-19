import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from './NewsArticle';
import App from '../App/App';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewsArticle', () => {
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
