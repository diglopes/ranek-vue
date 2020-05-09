import httpRequest from './httpRequest';

export const createTransaction = (payload) => httpRequest.post('transacao', payload);
export const getTransaction = (id) => httpRequest.get(`transacao?comprador_id=${id}`);
