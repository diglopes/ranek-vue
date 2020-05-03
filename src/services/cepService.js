import axios from 'axios';

function serializeCep(data) {
  return {
    cidade: data.localidade,
    bairro: data.bairro,
    estado: data.uf,
    rua: data.logradouro,
  };
}

export default (cep) => axios.get(`https://viacep.com.br/ws/${cep}/json`).then(({ data }) => serializeCep(data));
