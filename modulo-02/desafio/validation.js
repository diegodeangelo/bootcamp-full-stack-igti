const validation = require("express-validation");

function validate(properties) {
  return validation.validate(
    {
      body: validation.Joi.object(properties),
    },
    { keyByField: true }
  );
}

function validationError(err) {
  if (err instanceof validation.ValidationError) {
    const firstProperty = Object.keys(err.details[0])[0];

    return err.details[0][firstProperty];
  }

  return false;
}

Joi = validation.Joi;

module.exports = { validate, validationError, Joi };
