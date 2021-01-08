import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default function contact({ data }) {
  return (
    <Layout>
      <StyledHero img={data.connectBcg.childImageSharp.fluid}>
        Contact Page
      </StyledHero>
    </Layout>
  )
}
