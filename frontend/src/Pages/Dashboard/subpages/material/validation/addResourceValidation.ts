import { omit } from "lodash";
export const validateAddResource = (
  name: any,
  value: any,
  errors: any,
  setErrors: any
) => {
  switch (name) {
    case "language":
      if (value.length < 3) {
        setErrors({
          ...errors,
          language: "language should atleast have 3 letters",
        });
      } else {
        let newObj = omit(errors, "language");
        setErrors(newObj);
      }
      break;

    case "title":
      if (value.length < 3) {
        setErrors({
          ...errors,
          title: "Title should at least have 3 characters",
        });
      } else {
        let newObj = omit(errors, "title");
        setErrors(newObj);
      }
      break;

    case "description":
      if (value.length < 3) {
        setErrors({
          ...errors,
          description: "Description should at least have 3 characters",
        });
      } else {
        let newObj = omit(errors, "description");
        setErrors(newObj);
      }
      break;

    case "category":
      if (value.length < 3) {
        setErrors({
          ...errors,
          category: "Category should at least have 3 characters",
        });
      } else {
        let newObj = omit(errors, "category");
        setErrors(newObj);
      }
      break;
    case "type":
      if (!(value == "book" || value == "audio" || value == "video")) {
        setErrors({
          ...errors,
          type: "Type should be either book, audio or video",
        });
      } else {
        let newObj = omit(errors, "type");
        setErrors(newObj);
      }
      break;

    default:
      break;
  }
};
