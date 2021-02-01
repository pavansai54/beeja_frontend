import React from 'react';
import Styled from '@emotion/styled';
// import history from './History';
import { Link } from 'react-router-dom';
const Header = Styled.header`
margin:0;
background-color:black;
padding:20px;
position:sticky;
z-index:1;
`;
const Footer = Styled.footer`
margin:0;
background-color:black;
padding:20px;
position:fixed;
z-index:1;
bottom:0;
width:100%
`;
const Tittle = Styled.p`
color :black;
text-align:center;
font-size:100px;
font-weight:medium;
padding:100px;
`;
const LeftSplit = Styled.div`
height:100%;
width: 55%;
position:fixed;
z-index:-1;
left:0px;
background-color:grey;
`;
const RightSplit = Styled.div`
height:100%;
width:45%;
position:fixed;
z-index:-1;
right:0px;
text-align:center;
background-color:white;
padding-top:100px;
margin:auto;
`;
const Button = Styled.button`
color:black;
height:30px;
text-align:center;
font-size:20px;
background-color:powderblue;
width:17.5%;
border-radius:5px;
&:hover {
  opacity:0.5;
`;
const Heading = Styled.h1`
color:black;
text-align:center;
font-size:40px;
font-weight:medium;
padding-top:10px;
`;
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`;
const Lable = Styled.label`
`;
const Input = Styled.input`
padding:4px;
`;
const Break = Styled.br`
`;

export  const LoginPage = () => {
  return(
  <>
    <Header />
    <LeftSplit>
      <Tittle>
        tech.at.core
      </Tittle>
    </LeftSplit>
    <RightSplit >
      <Heading>Beeja</Heading>
      <Lable htmlFor="username">Username: </Lable>
      <Input placeholder="Username" type="text" required />
      <Break /><Break />
      <Lable htmlFor="password">Password: </Lable>
      <Input placeholder="Password" type="password" required />
      <Break />
      <Break />
      
        <LinkTag to={"/home"}>
        <Button type="submit" >
        Login
        </Button>
         
        </LinkTag>
     
    </RightSplit>
    <Footer/>
  </>
)
};