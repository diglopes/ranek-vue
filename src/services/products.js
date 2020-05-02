import httpRequest from './httpRequest';

// eslint-disable-next-line
export const getProducts = () => httpRequest.get('/produtos');
