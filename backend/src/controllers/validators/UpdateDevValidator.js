const Joi = require('@hapi/joi');

const updateSchema = Joi.object().keys({
  techs: Joi.string()
    .messages({
      'string.base': 'Valor de usuário do github deve ser um texto'
    }),
  latitude: Joi.number()
    .messages({
      'number.base': 'Valor de latitude deve ser um número.'
    }),
  longitude: Joi.number()
    .messages({
      'number.base': 'Valor de latitude deve ser um número.'
    })
})
  .with('latitude', 'longitude')
  .with('longitude', 'latitude');

module.exports = updateSchema;