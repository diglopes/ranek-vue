import httpRequest from './httpRequest';

export const getProducts = ({ query = '' }) => httpRequest.get(`/produtos${query}`);

export const getProductById = (id) => httpRequest.get(`produtos/${id}`);

export const getProductsByUserId = (id) => httpRequest.get(`produtos?usuario_id=${id}`);
