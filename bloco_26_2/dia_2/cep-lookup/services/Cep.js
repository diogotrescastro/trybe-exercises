const Cep = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }
  const cep = await Cep.findAddressByCep(searchedCep);
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  return cep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const existingCep = await Cep.findAddressByCep(cep);
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }
  return Cep.create({ cep, logradouro, bairro, localidade, uf });
};


module.exports = {
  findAddressByCep,
  create
};