import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  const image = getImage(data.sanityCommittee.image.asset.gatsbyImageData)
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <GatsbyImage
        image = {image} alt={data.sanityCommittee.name}
      />
      <h1>{data.sanityCommittee.name}</h1>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  sanityCommittee {
    name
    role
    profession
    accolades
    image {
      asset {
        gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
      }
    }
    bio {
      _rawChildren(resolveReferences: {maxDepth: 10})
    }
  }
}`