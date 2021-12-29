import React from 'react'
// import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import SeO from "../components/seo";
import Layout from '../components/Layout'
// import Features from '../components/Features'
import BlogTopRoll from '../components/BlogTopRoll'
// import BlogRoll from '../components/BlogRoll'
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { StaticImage } from 'gatsby-plugin-image'

const IndexPageTemplate = ({ data }) => (
  <Layout>
    <SeO title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.description} />
      <div className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(/img/sunrise.jpg)`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
      >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered"
          style={{
            boxShadow:
              'rgb(177, 28, 47) 0.5rem 0px 0px, rgb(177, 28, 47) -0.5rem 0px 0px',
            backgroundColor: 'rgb(177, 28, 47)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
           {data.markdownRemark.frontmatter.title}
         </h1>
         <h3
           className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered  "
           style={{
             boxShadow:
               'rgb(177, 28, 47) 0.5rem 0px 0px, rgb(177, 28, 47) -0.5rem 0px 0px',
             backgroundColor: 'rgb(177, 28, 47)',
             color: 'white',
             lineHeight: '1',
             padding: '0.25em',
           }}
         >
           {data.markdownRemark.frontmatter.subtitle}
         </h3>
       </div>
     </div>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <section className="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>

                <div className="columns is-multiline">
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div style={{width: "240px", display: "inline-block"}} >
                            <StaticImage src="/img/oe.png" alt="Open Education" placeholder="blurred" />
                        </div>
                      </div>
                      <br />
                      <p>{data.markdownRemark.frontmatter.oe.text}</p>
                    </section>
                  </div>
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div style={{width: "240px", display: "inline-block"}} >
                            <StaticImage src="/img/oer.png" alt="Open Educational Resources" placeholder="blurred" />
                        </div>
                      </div>
                      <br />
                      <p>{data.markdownRemark.frontmatter.oer.text}</p>
                    </section>
                  </div>
                </div>

                <div className="columns is-multiline">
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div style={{width: "240px", display: "inline-block"}} >
                            <StaticImage src="/img/ocw.png" alt="OpenCourseWare" placeholder="blurred" />
                        </div>
                      </div>
                      <br />
                      <p>{data.markdownRemark.frontmatter.ocw.text}</p>
                    </section>
                  </div>
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div style={{width: "240px", display: "inline-block"}} >
                            <StaticImage src="/img/mooc.png" alt="MOOCs" placeholder="blurred" />
                        </div>
                      </div>
                      <br />
                      <p>{data.markdownRemark.frontmatter.moocs.text}</p>
                    </section>
                  </div>
                </div>
                <div className="columns">
                   <div className="column is-12 has-text-centered">
                     <Link className="btn" to="/history">
                       See our history
                     </Link>
                   </div>
                 </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">News and Updates</h3>
                  <BlogTopRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/news">
                      Read more
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPageTemplate;

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
      pathPrefix
    }
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
        id
        html
        frontmatter {
          description
          heading
          moocs {
            text
          }
          ocw {
            text
          }
          oe {
            text
          }
          oer {
            text
          }
          subtitle
          templateKey
          title
        }
      }
}

`;
