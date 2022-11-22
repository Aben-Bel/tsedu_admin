export const buildMakeMaterial = (materialValidator) => {
  return ({ title, description, category, type }) => {
    let { error } = materialValidator({ title, description, category, type });
    if (error) throw new Error(error);

    return {
      getTitle: () => title,
      getDescription: () => description,
      getCategory: () => category,
      getType: () => type,
    };
  };
};
