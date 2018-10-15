import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p> You're seeing a webpage updated by Neeraj Srivastava.</p>
    <p>He's open to every technology and tries to decrease the gap between the old and the new technologies.</p>
    <Link to="/page-2/">You can ask him for help in every field you want to ask, he's good at googling actually</Link>
  </Layout>
)

export default IndexPage
