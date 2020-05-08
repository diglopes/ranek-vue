import httpRequest from './httpRequest';

// eslint-disable-next-line
export const createTransaction = (payload) => httpRequest.post('transacao', payload);
