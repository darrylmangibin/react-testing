import React from 'react';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';

let wrapped;

beforeEach(function(){
  wrapped = mount(<CommentBox />);
});

afterEach(function(){
  wrapped.unmount();
})

it('has a textarea and a button', function(){
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});