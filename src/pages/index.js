import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { Header } from "../Themes/Themes"
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"

const Wrapper = styled.div`

`

const ButtonLink = styled(Link)`
display: inline-block;
background: #ccc;
color: black;
padding: 10px 10px;
border-radius: 10px;
margin-top: 20px;
font-weight: 500px;
`


const SectionWrapper = styled(Header)``
const Heading2 = styled.h2``
const Heading3 = styled.h3``
const Paragraph = styled.p``


export default function Home({ data }) {

  return (
    <>

      <Layout>

        <SectionWrapper>

          <Wrapper>
            <Heading2>Nkiru Emeka</Heading2>
            <Heading3>'Seeing Is Believing'</Heading3>
            <Paragraph>Amateur Photgrapher based in London</Paragraph>
            <ButtonLink to="/projects">My Portfolio</ButtonLink>
          </ Wrapper>
          <Img fluid={data.file.childImageSharp.fluid}/>

          
        </SectionWrapper>
      </Layout>
    </>


  )
}

export const query = graphql`
query Nkiru {
  file(relativePath: {eq: "Nkiru_Cam.jpeg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`