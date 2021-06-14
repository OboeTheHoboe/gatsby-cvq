import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const PostsItem = ({path, title, image, topic}) => {

    return (
        <>
        <li className='cards__item'>
        <Link className='cards__item__link' to={"/publicaciones/"+path}>
          <figure className='cards__item__pic-wrap' data-category={topic}>
            <GatsbyImage
              className='cards__item__img'
              image={image}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{title}</h5>
          </div>
        </Link>
      </li>
        </>
    )
}

export default PostsItem