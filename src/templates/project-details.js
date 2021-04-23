import React from 'react'
import Layout from "../components/Layout"
import Img from "gatsby-image"
// import {ProjectDetailStyles, Details, Featured} from "../Themes/ProjectDetailsStyles"
import styled from 'styled-components';
import { graphql } from 'gatsby';


const Details = styled.div`

font-size: 3.5em;
margin-top: 80px;

h3{
    font-size:2em;
    font-weight: 400;
    margin-bottom: 40px;
}
`
const Featured = styled.div`
margin-bottom: 40px;
`

const ProjectStyle = styled.div`
html{
    margin-top:40px;
}
`


export default function ProjectDetails({ data }) {

  const { html } = data.markdownRemark;
  const { title, stack, featuredImg, slug } = data.markdownRemark.frontmatter;
  console.log(data);

  return (
    <Layout>
      <ProjectStyle />
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <h3>{slug}</h3>
      <Details>

        <Featured>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </Featured>
        <ProjectStyle dangerouslySetInnerHTML={{ __html: html }} />

      </Details>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPageDeets($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `
