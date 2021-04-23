import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar'
import { createGlobalStyle } from 'styled-components';


const GlobalLayout = styled.div`
max-width: 1200px;
margin: 0 auto;
`
const ContentWrapper = styled.div``
const Footer = styled.footer`


`
const FooterParagraph = styled.p`  
    text-align: center;
    color: lightgray;
    margin: 40px auto;
`

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    text-decoration:none;
    color:white;
}

html, body{
    overflow-x:hidden;
    min-height:100%;
}

body{
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    background-repeat: no-repeat;
}

p{
    margin: 16px auto;
    line-height: clamp(0.5em, 5vw, 1.5em);
    
}

`;


const Layout = ({ children }) => {
    return (
        <GlobalLayout>
            <GlobalStyle />

            <Navbar />
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer>
                <FooterParagraph>
                    Copyright (C) NK Vision 2021
                </FooterParagraph>
            </Footer>
        </GlobalLayout>
    )
}

export default Layout

