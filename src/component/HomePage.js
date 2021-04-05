import React, { Component, Fragment } from 'react'
import Styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useQuery, gql, useMutation } from '@apollo/client';
import './images/mobile_black.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = Styled.nav`
background-color: ${(props) => props.bgColor};
color: ${(props) => props.color};
position: sticky;
top: 0px;
font-size: 20px;
padding: 8px;
text-align:${(props) => props.text};
`;
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`;
const Logo = Styled.img`
height: 30px;
width: 30px;
margin-bottom:-5px;
`;
const Table = Styled.table`
border-collapse: collapse;
border: 3px solid #ddd;
`;
const TableData = Styled.td`
border: 3px solid #ddd;
height:100px;
font-size:20px;
font-weight:bold;
vertical-align:bottom;
text-align:left;
&:hover {background-color: grey;}
`;
const TableRow = Styled.tr`

`;
const Button = Styled.button`
background-color:white;
border:none;
height:100px;
font-size:20px;
width:300px;

 `;

 
// color:black;
// border: 3px solid #ddd;
//  &:nth-child(even){background-color: #F2F2F2;}
// background-color: ${props =>
//         props.save ? 'powderblue' : 'white'};
export const HomePage = () => {

    return (

        <Fragment>
            <Navbar bgColor="grey" color="white" text="center">
                Home page
                    </Navbar>
            <Table>
                <TableRow>
                    <TableRow><TableData>
                          <LinkTag to={"/hr"} >
                          <Button>HR </Button></LinkTag></TableData></TableRow>
                    <TableRow><TableData>
                        <LinkTag to={"/ss"}> <Button>ACCOUNTING</Button></LinkTag>
                    </TableData></TableRow>
                   
                        <LinkTag to={"/list"} >
                        <TableRow><TableData><Button>
                            EMOPLOYEE DIRECTORY</Button></TableData></TableRow>
                             </LinkTag>
                    
                    <TableRow><TableData> <Button> CLIENT </Button></TableData></TableRow>

                    <TableRow ><TableData>
<Button>
                        DOCUMENTATION</Button>
                        </TableData></TableRow>

                </TableRow>
            </Table>
        </Fragment>
    )
}