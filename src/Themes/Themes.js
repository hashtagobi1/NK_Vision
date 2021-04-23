import styled from 'styled-components';
import {Link} from "gatsby"


export const Header = styled.header`
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap: 40px;
align-items:center;

h2{
    font-size:4em;
}

h3{
    font-size: 3em;
    font-weight: 400;
    margin-bottom: 20px;
}
`

export const Buttonz = styled(Link)`
display: inline-block;
background: red;
padding: 10px 10px;
border-radius: 10px;
margin-top: 20px;
font-weight: 500px;
`

export const PortfolioContainer = styled.div`
text-align: center;

h2{
    font-size: 3rem;
    margin-top: 80px;
}

h3{
    font-size: 2em;
    font-weight: 400;
}

`