import { helpers } from "@vuelidate/validators";
import { maxLength } from "@vuelidate/validators";

// Name
const nameRule = maxLength(30);

// Reference
const referenceRegex = helpers.regex(/^\d{5}-\d{2}$/);
const referenceRule = helpers.withMessage("Reference should be on example 00000-00", referenceRegex);

export { nameRule, referenceRule };

// I am not to fully sure to keep it in this place

export const priorityOptions = [
  { name: "Yes", code: true },
  { name: "No", code: false },
];

export const applicationTypeOptions = [
  { name: "Bank Pomysłów", id: 0 },
  { name: "Wniosek Ogólny", id: 1 },
  { name: "Zgłoszenie problemów", id: 2 },
];
