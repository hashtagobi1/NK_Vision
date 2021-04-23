import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
display:grid;
grid-template-columns: 1fr 1fr;
margin: 40px auto;
`

const Links = styled.div`
display: inline-block;
text-align: right;
`

const IndivLink = styled(Link)`

display:inline-block;
margin-left:20px;
font-weight: 400;
padding-bottom: 3px  solid transparent;


&:hover{
    color:black;
    border-color:pink;
}
`



const Navbar = () => {

    const data = useStaticQuery(graphql`
query SiteInfo {
  site {
    siteMetadata {
      title
    }
  }
}


`)

    const { title } = data.site.siteMetadata;



    return (
        <NavBar>
            <Link to="/">
                <h1>{title}</h1>

            </Link>

            <Links>
                <IndivLink to="/">Home</IndivLink>
                <IndivLink to="/about">About</IndivLink>
                <IndivLink to="/projects">Portfolio Projects</IndivLink>
            </Links>

        </NavBar>
    )
}

export default Navbar
