import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Committee from '../components/committee'
import Hero from '../components/hero'
import Posts from '../components/posts'
import './global.css';


const RWQO = ({data}) => {
  return (
    <Layout pageTitle="Reto Wöhler de Química Orgánica">
    </Layout>
  )
}

export default RWQO