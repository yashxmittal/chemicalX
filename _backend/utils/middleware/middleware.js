const Joi = require('joi');

const updatevalidation = Joi.object({
        name: Joi.string().messages({ message: `name is required` }).required(),
        description: Joi.string().messages({ message: `description is required` }).required(),
    })

module.exports = updatevalidation