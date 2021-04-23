import React from 'react'
import Layout from "../../components/Layout"
import { PortfolioContainer } from "../../Themes/Themes"
import styled from "styled-components"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"

// const Image = styled.img`
// display: inline-block;
// max-width: 100%;
// height: 300px;
// width: 300px;
// `
const Paragraph = styled.p`
text-align:center;
`
const ProjectBunch = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 80px;
color: red;
margin: 80px 20px;

h3{
    text-align: center;
    margin: 20px auto 0px;
    font-weight: 500;
    padding: 20px;
}

p{
    color: #ccc;
    margin-top: 8px;
    padding: 10px;
}
`

// const PortButton = styled(Link)`
// display: inline-block;
// background: red;
// padding: 10px 10px;
// border-radius: 10px;
// margin-top: 20px;
// font-weight: 500px;`

export default function Projects({ data }) {

    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    return (
        <Layout>
            <PortfolioContainer>
                <h2>
                    Kenya 2020
                    </h2>
                <h3>African Tigers</h3>
                <p>Went on a 10 day trip to the MotherLand. These are my favourite pieces.</p>

                {/* <Buttonz to="/projects">My PortFolio Projects</Buttonz> */}
                <ProjectBunch>
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <h3>
                                    {project.frontmatter.title}
                                </h3>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                                <p>
                                    {project.frontmatter.stack}
                                </p>
             
                            </div>
                        </Link>
                    ))}
                </ProjectBunch>
            </PortfolioContainer>
            <Paragraph>Like what you see? email me at {contact}</Paragraph>
        </Layout>

    )
}

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid

            }
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}



`