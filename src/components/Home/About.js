import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="maountain" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about company" />
          </div>
        </article>
        <artical className={styles.aboutInfo}>
          <h4>The Mount Kenya. </h4>
          <p>
            Climbing to 5,199 meters, Mount Kenya is the second tallest mountain
            in Africa. The scenery surrounding this designated World Heritage
            Site is breath-taking. It is pristine wilderness with lakes, tarns,
            glaciers, dense forest, mineral springs and a selection of rare and
            endangered species of animals, high altitude adapted plains game and
            unique montane and alpine vegetation.
          </p>
          <p>
            Visitors can enjoy mountain climbing, camping and caving with the
            mountain’s rugged glacier-clad peaks providing the perfect backdrop.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Mount_Kenya"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            read more
          </a>
        </artical>
      </div>
    </section>
  )
}
export default About
