import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Not only technical stuffs, you can ask for other advices too</p>
    <Link to="/">Wanna go back to the same old page?</Link>
  </Layout>
)

export default SecondPage
