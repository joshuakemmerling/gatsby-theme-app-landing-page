import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query AppQuery {
      appStoreApp {
        appId
        name
        icon
        editorialNotes {
          short,
          standard,
          tagline,
        }
        url
        iphone65Screenshots
        description
        rating
        reviews
        version
        developerWebsite
        developer
        supportUrl
        privacyPolicyUrl
        iphone55Screenshots
        ipadScreenshots
        macScreenshots
        subtitle
      }
    }
  `);

  return data.appStoreApp;
};
