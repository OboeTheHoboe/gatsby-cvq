import * as React from 'react'
import Layout from '../components/layout'
import './global.css';
import { graphql } from 'gatsby'

const Publicaciones = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {
        data.allFile.nodes.map((file) =>{
          return(
            <a href={file.publicURL}><li>{file.name}</li></a>
        )})}
      </ul>
    </Layout>
  )
}
export default Publicaciones

export const query = graphql`
  query files {
    allFile {
      nodes {
        name
        publicURL
      }
    }
  }
`