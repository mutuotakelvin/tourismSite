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
  console.log(images)
  const [mainImage, ...placeImages] = images
  console.log(mainImage)
  console.log(placeImages)
  return <h1>{name}</h1>
}

export const query = graphql`
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
