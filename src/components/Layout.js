import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const {title} = data.site.siteMetadata
    return ( 
        <div>
            <div>
                <Link to="/">{title}</Link>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
            <div>{children}</div>
        </div>
     );
}
 
export default Layout;