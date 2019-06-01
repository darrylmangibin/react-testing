import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )  
});

afterEach(() => {
  wrapped.unmount()
})

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('The teaxtarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  });

  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  });

  it('when form is submitted, textarea gets emptied', () => {
    wrapped.find('textarea').simulate('submit');
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
})