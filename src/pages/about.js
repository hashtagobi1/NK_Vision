import React from 'react'
import styled from "styled-components"
import Layout from "../components/Layout"
import { graphql } from "gatsby";
import Img from "gatsby-image"


const AboutWrapper = styled.div`
display: grid;
justify-content: space-between;
align-items: center;
margin: 20px 20px;
padding: 30px;

grid-template-columns: 1fr 1fr 1fr;
`

const Heading1 = styled.h1``
const Paragraph = styled.p`
text-align:justify;
padding: 20px 20px;`


export default function About({data}) {
    return (

        <Layout>
            <AboutWrapper>
                <Heading1>
                    My Journey!
                    </Heading1>
                <Paragraph>Self taught camera enthusiast! I was first gifted a camera at age 12 and have been fascinated since! Everyone has a unique 'lens' to view the world through. This is mine.</Paragraph>
                <Img fluid={data.file.childImageSharp.fluid} />

            </AboutWrapper>
        </Layout>


    )
}

export const query = graphql`
query NkiruHolding {
  file(relativePath: {eq: "cam_look.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`