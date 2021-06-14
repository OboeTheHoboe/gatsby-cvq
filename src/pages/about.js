import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import './global.css';

const AboutPage = ({data}) => {
  const aboutUs = data.allContentfulAboutUs.edges[0].node
  const image = getImage(aboutUs.image.gatsbyImageData)
  return (
    <Layout pageTitle={aboutUs.title}>
      <GatsbyImage
        image = {image}
      />
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: aboutUs.description.childMarkdownRemark.html
        }}
      />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
query AboutUs {
  allContentfulAboutUs {
    edges {
      node {
        title
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`