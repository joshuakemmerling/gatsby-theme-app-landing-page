# App Landing Page Gatsby Theme

A Gatsby theme that quickly creates a one-page website for your mobile app that has already been released.

## Example

You can see an example of this theme at [here](https://applandingtheme.joshuakemmerling.com).

## Installation

```
npm i --save gatsby-theme-app-landing-page
```

```
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-app-landing-page',
      options: {
        appStoreId: 123456,
        typography: 'slab',
        appearance: 'dark',
      },
    },
  ],
};
```

## Plugin Options

The following plugin options let you control design aspects of the theme.

1. `appStoreId` (required): ID of your Apple App Store app.

2. `typography` (optional): Typeography of the headers. Default value: `sans`.

    Possible option values:

    * `sans` - [Inter](https://fonts.google.com/specimen/Inter).
    * `serif` - [Source Serif Pro](https://fonts.google.com/specimen/Source+Serif+Pro).
    * `slab` - [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab).
    * `mono` - [Space Mono](https://fonts.google.com/specimen/Space+Mono).

3. `appearance` (optional): Appearance of the theme. Default value: `auto`.

    Possible option values:

    * `light` - Light colored theme.
    * `dark` - Dark colored theme.
    * `auto` - Changes with the device display appearance setting.
