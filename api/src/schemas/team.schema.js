import baseSchema from "./base.schema.js";

import Joi from "joi";

const teamSchema = baseSchema.keys({
  name: Joi.string().trim().min(1).max(255).required(),
  description: Joi.string().trim().min(1).max(1000).required(),
  profile_id: Joi.number().integer().positive().required(),
});

export default teamSchema;
