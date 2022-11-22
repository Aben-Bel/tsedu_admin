import config from "../config";

const lang = config.LANGUAGE;
const strings = {
  english: {
    TITLE_ERROR: "must have title as string",
    DESCRIPTION_ERROR: "must have description title as string",
    CATEGORY_STUDENT: "Student",
    CATEGORY_COMMUNITY: "Community",
    CATEGORY_HEALTHOFFICER: "Health officer",
    CATEGORY_MEDIA: "Media",
    CATEGORY_RELIGIOUSFIGURE: "Religious Figure",
    BOOK: "Book",
    VIDEO: "Video",
    AUDIO: "Audio",
  },
  amharic: {},
};

export const Constants: any = strings[lang];
