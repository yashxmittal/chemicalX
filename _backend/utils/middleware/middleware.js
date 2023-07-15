const Joi = require('joi');

const updatevalidation = Joi.object({
        description: Joi.string().messages({ message: `description is required` }).required(),
    })

module.exports = updatevalidation