
import React from 'react';
import { shallow } from 'enzyme';
import Timer from '../Timer';

describe('List tests', () => {
   const time = 120;
    it('renders timer', () => {
      const wrapper = shallow(<Timer time={time} />);
      expect(wrapper.find('.card-header')).toBeDefined();
      expect(wrapper.find('.card-body')).toBeDefined();
    });
  });