import httpRequest from './httpRequest';

// eslint-disable-next-line
export const getUser = ({email, senha}) => httpRequest.get(`/usuario?email=${email}&senha=${senha}`)
