import { graphql, Link } from 'gatsby';
import React from 'react'
import Img from 'gatsby-image'
const Posts = ({data}) => {
    const {nodes: projects} = data.projects
    // const {nodes: contact} = data.siteMetadata
    console.log(data)
    return ( 
        <div>
            {projects.map(p => (
                <div key={p.id}>
                    <Link to={`/posts/${p.frontmatter.slug}`}>
                    <h1>{p.frontmatter.title}</h1>
                    </Link>
                    <Img fluid={p.frontmatter.image.childImageSharp.fluid}></Img>
                    <p>{p.html}</p>
                </div>
            ))}
        </div>
     );
}

export const query = graphql`
query ProjectsPage {
    projects:allMarkdownRemark {
      nodes {
        html
        id
        frontmatter {
          title
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    contact: site{
        siteMetadata{
            title
        }
    }
  }
`
 
export default Posts;