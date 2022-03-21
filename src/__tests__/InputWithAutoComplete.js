import React from 'react';
import { shallow, mount } from 'enzyme';
import InputWithAutocomplete from '../components/InputWithAutocomplete';

describe('InputWithAutocomplete component render', () => {
  it('renders without crashing', () => {
    shallow(<InputWithAutocomplete/>);
  });
});

describe('InputWithAutocomplete container transitions', () => {
  it('checks menu transition', () => {
    let component = shallow(<InputWithAutocomplete/>);
    expect(component.find('.list-container').length).toBe(0);

    component.setState({focus: true});
    expect(component.find('.list-container').length).toBe(1);
  });

  it('checks autocomplete results', () => {
    let component = shallow(<InputWithAutocomplete results={['An', 'And', 'Or']}/>);
    expect(component.find('.list-item').length).toBe(3);

    component.setState({value: 'a'});
    expect(component.find('.list-item').length).toBe(3);

    component.setState({value: 'r'});
    expect(component.find('.list-item').length).toBe(3);
  });
});
