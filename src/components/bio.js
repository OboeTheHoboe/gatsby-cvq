import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import './bio.css'

const Bio = ({person}) => {

    return (
        <div className="bio">
            <GatsbyImage className="bio-photo" image={person.photo.gatsbyImageData} />
            <div className="bio-container">
                <h4>{person.name}</h4>
                <div>
                    <p>{renderRichText(person.bio)}</p>
                </div>
            </div>
        </div>
    )
}

export default Bio