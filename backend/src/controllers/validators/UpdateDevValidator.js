const Joi = require('@hapi/joi');

const updateSchema = Joi.object().keys({
  techs: Joi.string(),
  latitude: Joi.number(),
  longitude: Joi.number()
})
  .with('latitude', 'longitude')
  .with('longitude', 'latitude');

module.exports = updateSchema;