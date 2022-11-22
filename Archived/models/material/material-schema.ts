import Joi from "joi";
import { Constants } from "../Constants";

const material = Joi.object().keys({
  title: Joi.string()
    .required()
    .error(() => Constants.TITLE_ERROR),
  description: Joi.string()
    .required()
    .error(() => Constants.DESCRIPTION_ERROR),
  category: Joi.string()
    .required()
    .valid(
      Constants.CATEGORY_COMMUNITY,
      Constants.CATEGORY_HEALTHOFFICER,
      Constants.CATEGORY_MEDIA,
      Constants.CATEGORY_RELIGIOUSFIGURE
    ),
  type: Joi.string()
    .required()
    .valid(Constants.BOOK, Constants.VIDEO, Constants.AUDIO),
});

export { material };
