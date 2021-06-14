import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PostsItem from './postitem'
import './posts.css';

const Posts = () => {
    const data = useStaticQuery(graphql`
    query Posts {
        allSanityPost {
          nodes {
            Topic
            author {
              name
              profession
              role
            }
            image {
              asset {
                gatsbyImageData (fit: FILLMAX, placeholder: DOMINANT_COLOR)
              }
            }
            slug {
              current
            }
            title
            content
            publishedAt(formatString: "")
          }
        }
      } 
    `)

    const posts = data.allSanityPost.nodes

    return (
        <div className='cards'>
            <h1>¡Últimas Noticias!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    {posts.map((post, index)=>{

                        if(index < 2){
                            return(
                                <PostsItem 
                                path= {post.slug.current}
                                topic = {post.Topic}
                                title= {post.title}
                                image= {getImage(post.image.asset.gatsbyImageData)}/>
                            )
                        }
                        else{
                            return;
                        }
                    })}
                    </ul>
                    <ul className='cards__items'>
                    {posts.map((post, index)=>{

                        if(index > 1){
                            return(
                                <PostsItem 
                                path= {post.slug.current}
                                topic = {post.Topic}
                                title= {post.title}
                                image= {getImage(post.image.asset.gatsbyImageData)}/>
                            )
                        }
                        else{
                            return;
                        }
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Posts