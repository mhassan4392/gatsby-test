import { graphql } from 'gatsby';
import React from 'react'
export default function ProjectDetails({data}) {
    console.log(data)
    const post = data.markdownRemark
    console.log(post) 
    return ( 
        <div>
            <h2>{post.frontmatter.title}</h2>
            <p>{[post.html]}</p>
        </div>
     );
}

export const query = graphql`
query PostsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
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
`
