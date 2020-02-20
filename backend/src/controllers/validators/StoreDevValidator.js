const Joi = require('@hapi/joi');

const storeSchema = Joi.object().keys({
  github_username: Joi.string().alphanum().required()
    .messages({
      'string.alphanum': 'Valor de usuário do github deve conter apenas alfanumérico.',
      'string.base': 'Valor de usuário do github deve ser um texto',
      'string.empty': 'Valor de usuário do github não pode ser vazio.',
      'any.required': 'Valor de usuário do github é obrigatório.'
    }),
  techs: Joi.string().required()
    .messages({
      'string.base': 'Valor de tecnologias deve ser um texto',
      'string.empty': 'Valor de tecnologias não pode ser vazio.',
      'any.required': 'Valor de tecnologias é obrigatório.'
    }),
  latitude: Joi.number().required()
    .messages({
      'number.base': 'Valor de latitude deve ser um número.',
      'any.required': 'Valor de latitude é obrigatório.'
    }),
  longitude: Joi.number().required()
    .messages({
      'number.base': 'Valor de longitude deve ser um número.',
      'any.required': 'Valor de longitude é obrigatório.'
    })
});

module.exports = storeSchema;