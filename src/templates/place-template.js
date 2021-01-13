import React from "react"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const {
    name,
    timeRequired,
    timings,
    entryFees,
    description: { description },
    images,
  } = data.place

  const [mainImage, ...placeImages] = images
  return <h1>{name}</h1>
}

export const data = graphql`
  query($slug: String!) {
    contentfulAmazingMountainData(slug: { eq: $slug }) {
      name
      slug
      timeRequired
      entryFees
      timings
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default Template
