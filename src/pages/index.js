import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}


const IndexPage = ({data}) => {
  const integrantes = data.allSanityCommittee.nodes
  return (
    <Layout pageTitle="Home Page">
      <p>Experimento</p>
      <ul>
      {integrantes.map((integrante) =>{
        return(
          <li>
          <GatsbyImage
            image = {integrante.image.asset.gatsbyImageData}
          />
          <h1>{integrante.name}</h1>
          <p>{integrante.profession}</p>
          <p>{integrante.role}</p>
          <p>{integrante.bio[0].children[0].text}</p>
          </ li>
      )})}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allSanityCommittee {
    nodes {
      name
      image {
        asset {
          gatsbyImageData
        }
      }
      profession
      role
      bio {
        children {
          text
        }
      }
    }
  }
}`