import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="The Amazing Mountain"
          info="Come and Explore the Maountain which is a world Heritage Site."
        >
          <Link to="/places" className="btn-white">
            explore places
          </Link>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}
