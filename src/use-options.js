import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      themeOptions {
        appStoreId
        typography
        appearance
      }
    }
  `);

  return data.themeOptions;
};
