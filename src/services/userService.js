import httpRequest from './httpRequest';

export const getUser = ({ email, senha }) => httpRequest.get(`/usuario?email=${email}&senha=${senha}`);

export const createUser = (payload) => httpRequest.post('/usuario', payload);
