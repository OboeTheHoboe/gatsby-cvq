import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Committee from '../components/committee'
import Hero from '../components/hero'
import Posts from '../components/posts'
import './global.css';


const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Home Page">
      <Hero />
      <Committee> Comité Organizador </Committee>
      <Posts />
    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
// query {
//   allSanityCommittee {
//     nodes {
//       name
//       image {
//         asset {
//           gatsbyImageData
//         }
//       }
//       profession
//       role
//       bio {
//         children {
//           text
//         }
//       }
//     }
//   }
// }`