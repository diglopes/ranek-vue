import httpRequest from './httpRequest';

export const getProducts = ({ query = '' }) => httpRequest.get(`/produtos${query}`);

export const getProductById = (id) => httpRequest.get(`produtos/${id}`);
