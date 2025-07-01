import Joi from "joi";

export const authSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } }) // More flexible on domains extensions
    .required()
    .messages({
      "string.email": "L'email doit être une adresse email valide",
      "string.empty": "L'email est requis",
      "any.required": "L'email est obligatoire",
    }),
  username: Joi.string().min(3).max(30).required().messages({
    "string.base": "Le username doit être une chaîne de caractères.",
    "string.empty": "Le username est requis.",
    "string.min": "Le username doit contenir au moins {#limit} caractères.",
    "string.max": "Le username ne doit pas dépasser {#limit} caractères.",
    "any.required": "Le username est requis.",
  }),

  password: Joi.string().min(6).required().messages({
    "string.base": "Le mot de passe doit être une chaîne de caractères.",
    "string.empty": "Le mot de passe est requis.",
    "string.min": "Le mot de passe doit contenir au moins {#limit} caractères.",
    "any.required": "Le mot de passe est requis.",
  }),
});
export default authSchema;
