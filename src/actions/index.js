import { SAVE_COMMENTS } from './types';

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENTS,
    payload: comment
  }
}