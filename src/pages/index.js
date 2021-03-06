import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import About from "../components/Home/About"
import Tips from "../components/Home/Tips"
import { graphql } from "gatsby"
import FeaturedPlaces from "../components/Home/FeaturedPlaces"

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="The Amazing Mountain"
          info="Come and Explore the Maountain which is a world Heritage Site."
        >
          <AniLink paintDrip hex="#AEECEE" to="/places" className="btn-white">
            explore places
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Tips />
      <FeaturedPlaces />
    </Layout>
  )
}
