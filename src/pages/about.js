import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

const AboutPage = ({data}) => {
  const image = getImage(data.sanityCvq.image.asset.gatsbyImageData)
  return (
    <Layout pageTitle="About Me">
      <GatsbyImage
        image = {image}
      />
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <h1>{data.sanityCvq.title}</h1>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
query MyQuery {
  sanityCvq {
    image {
      asset {
        gatsbyImageData(fit: FILLMAX, placeholder: DOMINANT_COLOR)
      }
    }
    description {
      _key
      _type
      style
      list
      _rawChildren
    }
    title
  }
}
`