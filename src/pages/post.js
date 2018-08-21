/**
 * 文章详情页
 */

import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export const query = graphql`
query MyFilesQuery {
  allFile {
    edges {
      node {
        relativePath
        prettySize
        extension
        birthTime(fromNow: true)
      }
    }
  }
}
`
