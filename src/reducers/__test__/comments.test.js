import commentsReducer from '../comments';

import { SAVE_COMMENTS } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENTS,
    payload: 'new comment'
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['new comment'])
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], { type: 'unknown_action' });
  expect(newState).toEqual([])
})