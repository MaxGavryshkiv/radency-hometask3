(function () {
  const Joi = require("joi");

  const schemaCreateNote = Joi.object({
    noteName: Joi.string().required(),
    category: Joi.string()
      .pattern(/Task|Random Thought|Idea/)
      .required(),
    content: Joi.string().required(),
  });

  const schemaUpdateNote = Joi.object({
    noteName: Joi.string().required(),
    category: Joi.string()
      .pattern(/Task|Random Thought|Idea/)
      .required(),
    content: Joi.string().required(),
  }).or("noteName", "category", "content");

  const validate = async (schema, obj, next, message) => {
    try {
      await schema.validateAsync(obj);
      next();
    } catch (err) {
      next({ status: 400, message: message });
    }
  };

  module.exports = {
    validationCreateNote: (
      req,
      res,
      next,
      message = "missing required name field"
    ) => {
      return validate(schemaCreateNote, req.body, next, message);
    },
    validationUpdateNote: (req, res, next, message = "missing fields") => {
      return validate(schemaUpdateNote, req.body, next, message);
    },
  };
})();
