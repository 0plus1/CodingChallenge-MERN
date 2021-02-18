/* eslint-env jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter as Router } from 'react-router-dom';
import BookTile from '../components/Book/BookTile';

Enzyme.configure({ adapter: new Adapter() });

describe('<BookTile /> unit test', () => {
  const getWrapper = () => mount(
    <Router>
      <BookTile title="A Title" id="An Id" />
    </Router>,
  );

  it('renders a Link container', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('gets props', () => {
    const wrapper = getWrapper();
    expect(wrapper.props().children.props).toEqual({
      title: 'A Title',
      id: 'An Id',
    });
  });
});
