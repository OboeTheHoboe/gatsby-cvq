import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Bio from './bio'
import './committee.css'


const Committee = ({children}) => {

    const data = useStaticQuery(graphql`
    query Hero {
      allContentfulCommitteeMembers {
        nodes {
          accolades
          name
          photo {
            gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
          }
          bio {
            raw
          }
          profession
          role
        }
      }
    }    
  `)

  const integrantes = data.allContentfulCommitteeMembers.nodes

  return (
    <div className="members">
    <h1>{children}</h1>
    <div className="committee">
        <ul className="bio-items">
            {integrantes.map((integrante) =>{
                const photo = getImage(integrante.photo.gatsbyImageData)
                return(
                <li className="bio-item">
                <Bio person={integrante} />
                </li>
            )})}
        </ul>
      </div>
      </div>
  )
}

export default Committee