import api from './api-helper';

export const readAllTrails = async () => {
  const resp = await api.get('/trails');
  return resp.data;
}

export const readOneTrail = async (id) => {
  const resp = await api.get(`/trails/${id}`);
  return resp.data;
}

export const postTrail = async (trailData) => {
  const resp = await api.post(`/trails`, { trail: trailData });
  return resp.data;
}

export const putTrail = async (id, trailData) => {
  const resp = await api.put(`/trails/${id}`, { trail: trailData });
  return resp.data;
}

export const destroyTrail = async (id) => {
  const resp = await api.delete(`/trails/${id}`);
  return resp;
}

export const addTrail = async(commentId, trailId) => {
  const resp = await api.put(`/comments/${commentId}/trails/${trailId}`);
  return resp.data;
}