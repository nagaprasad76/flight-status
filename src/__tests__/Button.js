import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('Button component render', () => {
  it('renders without crashing', () => {
    shallow(<Button/>);
  });

  it('renders with label', () => {
    let component = shallow(<Button label={"test"}/>);
    expect(component.find('.button').text()).toBe("test");
  });

});
