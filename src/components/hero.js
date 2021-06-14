import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"


const Hero = ({children}) => {

    const data = useStaticQuery(graphql`
    query Hero {
      allContentfulCommitteeMembers {
        nodes {
          accolades
          name
          photo {
            gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
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
    <div className="hero">
        <h1>{children}</h1>
        <ul>
            {integrantes.map((integrante) =>{
                return(
                <li>
                <GatsbyImage
                    image = {integrante.photo.gatsbyImageData}
                />
                <h1>{integrante.name}</h1>
                <p>{integrante.profession}</p>
                <p>{integrante.role}</p>
                <div>
                  {renderRichText(integrante.bio)}
                </div>
                </li>
            )})}
        </ul>
      </div>
  )
}

export default Hero