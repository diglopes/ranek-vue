import httpRequest from './httpRequest';

// eslint-disable-next-line
export const getProducts = ({query = ""}) => httpRequest.get(`/produtos${query}`);
