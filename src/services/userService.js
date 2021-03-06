import httpRequest from './httpRequest';

export const getUser = ({ email, senha }) => httpRequest.get(`/usuario?email=${email}&senha=${senha}`);

export const createUser = (payload) => httpRequest.post('/usuario', payload);

export const updateUser = (payload) => httpRequest.put(`/usuario/${payload.id}`, payload);
