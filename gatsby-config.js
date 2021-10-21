module.exports = {
  siteMetadata: {
    title: `Action App`,
    description: `The Action app allows you to save and share your favorite movies and TV shows with friends.`,
    author: `Zach Meyer`,
    siteUrl: `https://joindiscovr.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `action`,
        short_name: `action`,
        start_url: `/`,
        background_color: `#1273f8`,
        theme_color: `#1273f8`,
        display: `standalone`,
        icon: `src/images/favicons/apple-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDgw5wAn-jsJRxxpMrGmW6VDt0oIL06q34",
          authDomain: "actionapp-d5e3d.firebaseapp.com",
          projectId: "actionapp-d5e3d",
          storageBucket: "actionapp-d5e3d.appspot.com",
          messagingSenderId: "99724511040",
          appId: "1:99724511040:web:1f6137f27904b6134e9ca5",
          measurementId: "G-LEJ9MQ06FD",
        },
      },
    },
  ],
}
