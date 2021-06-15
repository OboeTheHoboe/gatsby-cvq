import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
// import Header from './header'
import Navbar from './navbar'


const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
    <title>{pageTitle} | {data.site.siteMetadata.title}</title>
    <Navbar menuLinks={data.site.siteMetadata.menuLinks}/>
    <main>
      {children}
    </main>
    </>
  )
}

export default Layout