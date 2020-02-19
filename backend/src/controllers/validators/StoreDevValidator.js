const Joi = require('@hapi/joi');

const storeSchema = Joi.object().keys({
  github_username: Joi.string().alphanum().required(),
  techs: Joi.string().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required()
});

module.exports = storeSchema;