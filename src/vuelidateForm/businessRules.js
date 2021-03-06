import { helpers } from "@vuelidate/validators";
import { maxLength } from "@vuelidate/validators";

// Name
const nameRule = maxLength(30);

// Reference
const referenceRegex = helpers.regex(/^\d{5}-\d{2}$/);
const referenceRule = helpers.withMessage(
  "Reference should be on example 00000-00",
  referenceRegex
);

export { nameRule, referenceRule };
