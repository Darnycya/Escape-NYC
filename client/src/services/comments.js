import api from './api-helper';

export const readAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}

export const postComment = async (commentData) => {
  const resp = await api.post('/comments', { comment: commentData });
  return resp.data;
}


export const putComment = async (id, commentData) => {
  const resp = await api.put(`/comments/${id}`, { comment: commentData });
  return resp.data;
}