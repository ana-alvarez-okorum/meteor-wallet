import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

SimpleSchema.defineValidationErrorTransform((error) => {
  const ddpError = new Meteor.Error(error.message);
  ddpError.error = "validation-error";
  ddpError.details = error.details.map((detail) => detail.message).join(", ");
  return ddpError;
});
