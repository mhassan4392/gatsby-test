import { graphql } from 'gatsby';
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../components/Layout';
export default function About({data}) {
    console.log(data)
    return ( 
        <Layout>
            <div>Hello</div>
            <Img fluid={data.file.childImageSharp.fluid}></Img>
        </Layout>
     );
}

export const query = graphql`
query MyQuery {
    file(relativePath: {eq: "about.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`