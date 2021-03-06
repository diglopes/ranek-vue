import httpRequest from './httpRequest';

export const getProducts = ({ query = '' }) => httpRequest.get(`/produtos${query}`);

export const getProductById = (id) => httpRequest.get(`produtos/${id}`);

export const getProductsByUserId = (id) => httpRequest.get(`produtos?usuario_id=${id}`);

export const createProduct = (payload) => httpRequest.post('produtos', payload);

export const removeProductById = (id) => httpRequest.delete(`produtos/${id}`);
