/* eslint-env jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter as Router } from 'react-router-dom';
import ShelfCard from '../components/Shelf/ShelfCard';

Enzyme.configure({ adapter: new Adapter() });

describe('<ShelfCard /> unit test', () => {
  const getWrapper = () => mount(
    <Router>
      <ShelfCard slug="A slug" name="A Name" id="An Id" />
    </Router>,
  );

  it('renders a link container', async () => {
    const wrapper = await getWrapper();
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('gets props', () => {
    const wrapper = getWrapper();
    expect(wrapper.props().children.props).toEqual({
      slug: 'A slug',
      name: 'A Name',
      id: 'An Id',
    });
  });
});
