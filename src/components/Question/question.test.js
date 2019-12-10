
import React from 'react';
import { shallow } from 'enzyme';
import Question from '../Question';

const questionList =
   {
    "id":1,
    "questionType": "radio",
    "question": "What is Babel?",
    "options": ["A transpiler","An interpreter","A Compiler", "Both Compiler and Transpilar"],
    "answer": "Both Compiler and Transpilar",
    "selectedOption":null,
    "selectedVal":"",
    "result":false
  };

describe('question render', () => {
    it('renders list-items', () => {
      const wrapper = shallow(<Question questionData={questionList} />);
      expect(wrapper.find('.card-header')).toBeDefined();
      expect(wrapper.find('.card-body')).toBeDefined();
    });
  });