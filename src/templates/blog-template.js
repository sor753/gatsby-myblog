import * as React from "react"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Blog = ({ data, location }) => (
  <Layout>
    <Seo
      pagetitle="ブログ"
      pagedesc="ESSENTIALのブログです"
      pagepath={location.pathname}
    />
    <section className="content bloglist">
      <div className="container">
        <h1 className="bar">RECENT POSTS</h1>
        <div className="posts">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <article className="post" key={node.id}>
              <Link to={`/blog/post/${node.slug}`}>
                <figure>
                  <GatsbyImage
                    image={getImage(node.eyecatch.gatsbyImageData)}
                    alt={node.eyecatch.description}
                    style={{ height: "100%", width: "100%" }}
                  />
                </figure>
                <h3>{node.title}</h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allContentfulBlogPost(
      sort: {order: DESC, fields: publishDate}
      skip: 0
      limit: 6
    ) {
      edges {
        node {
          title
          id
          eyecatch {
            gatsbyImageData
            description
          }
          slug
        }
      }
    }
  }
`
