exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object().keys({
    appStoreId: Joi.string()
      .description(`Your app's Apple App Store ID.`)
      .required()
      .empty(),
    typography: Joi.string()
      .description('Typography style for the headers. Default: serif.')
      .valid('sans', 'serif', 'slab', 'mono')
      .default('sans')
      .optional(),
    appearance: Joi.string()
      .description(`Set your website's appearance to light, dark, or auto. Auto will set the appearance to the device's appearance. Default: auto.`)
      .valid('light', 'dark', 'auto')
      .default('auto')
      .optional(),
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`type ThemeOptions implements Node {
    appStoreId: String!
    typography: String!
    appearance: String!
  }`);
};

exports.sourceNodes = async ({ actions, createContentDigest }, pluginOptions) => {
  const { createNode } = actions;
  const options = {
    typography: 'sans',
    appearance: 'auto',
    ...pluginOptions,
  };

  createNode({
    ...options,
    id: `theme-options`,
    parent: null,
    children: [],
    internal: {
      type: 'ThemeOptions',
      content: JSON.stringify(options),
      contentDigest: createContentDigest(options),
    },
  });
};
