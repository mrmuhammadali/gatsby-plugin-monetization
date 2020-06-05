import React from "react"
import { useContent, useStatus } from "gatsby-plugin-monetization"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { startMonetization, stopMonetization } from "../utils"

const IndexPage = () => {
  const { state } = useStatus()
  const { isMonetized } = useContent()
  console.log(state)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p style={{ margin: 0 }}>
        Start monetization in order to see premium stuff:
      </p>
      <button type="button" onClick={startMonetization}>
        Start Monetization
      </button>
      <button type="button" onClick={stopMonetization}>
        Stop Monetization
      </button>
      {isMonetized && (
        <>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </>
      )}
    </Layout>
  )
}

export default IndexPage
