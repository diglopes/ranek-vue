// eslint-disable-next-line
export const serializeQuery = (query) => {
  const keys = Object.keys(query);
  return keys
    .reduce((q, key) => `${q}&${key}=${query[key]}`, '')
    .replace('&', '?');
};
