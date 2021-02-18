/* eslint-env jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BookCard from '../components/Book/BookCard';

Enzyme.configure({ adapter: new Adapter() });

describe('<BookCard /> unit test', () => {
  const getWrapper = () => mount(<BookCard title="A title" isbn="An ISBN" />);

  it('renders a div container', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('gets props', () => {
    const wrapper = getWrapper();
    expect(wrapper.props()).toEqual({
      title: 'A title',
      isbn: 'An ISBN',
    });
  });
});
