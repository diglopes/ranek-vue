export const serializeQuery = (query) => {
  const keys = Object.keys(query);
  return keys
    .reduce((q, key) => `${q}&${key}=${query[key]}`, '')
    .replace('&', '?');
};

export function mapFields(options) {
  const obj = {};
  for (let i = 0; i < options.fields.length; i++) {
    const field = options.fields[i];
    obj[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        return this.$store.commit(options.mutation, { [field]: value });
      },
    };
  }
  return obj;
}
