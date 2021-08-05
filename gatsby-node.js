const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
//const { fmImagesToRelative } = require('gatsby-remark-relative-images')
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
//exports.createPages = ({ actions, graphql }) => {
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const tagsPost = path.resolve(`./src/templates/tags.js`);

  // Get all markdown blog posts sorted by date
  const blogResult = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    `
  );

  if (blogResult.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, blogResult.errors);
    return;
  }
  const posts = blogResult.data.allMarkdownRemark.nodes;

  exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode });

      createNodeField({
        name: `slug`,
        node,
        value
      });
    }
  };

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      // posts.forEach((post) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        tags: post.frontmatter.tags,
        // component: blogPost,
        component: path.resolve(`src/templates/${String(post.frontmatter.templateKey)}.js`),
        context: {
          id: post.id,
          previousPostId,
          nextPostId
        }
      });
    });
  }

  // Tag pages:
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(post => {
    // if (_.get(post, `post.frontmatter.tags`)) {
    tags = tags.concat(post.frontmatter.tags);
    // }
  });

  // Eliminate duplicate tags
  tags = _.uniq(tags);

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag
      }
    }); // End createPage
  }); // End Make tag pages
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
      title: String
      description: String
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
      html: String
    }
    type Frontmatter {
      title: String
      subtitle: String
      heading: String
      description: String
      featuredpost: String
      path: String
      tags: [String]
      date: Date @dateformat
      oe: Indexes
      oer: Indexes
      ocw: Indexes
      moocs: Indexes
    }
    type Fields {
      slug: String
    }
    type Indexes{
      text: String
    }
    type Featuredimage{
      childImageSharp: ChildImageSharp
    }
    type ChildImageSharp{
      gatsbyImageData: GatsbyImageData
    }
    type GatsbyImageData{
      height: String
      width: String
      quality: String
      layout: String
      placeholder: String
      formats: [String]
    }
  `);
};

