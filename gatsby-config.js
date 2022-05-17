/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
	siteMetadata: {
    	title: "My First Gatsby Site Estudo Elton",
  },
  plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
    	'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			}
		},
		'gatsby-plugin-mdx',
	],
}
