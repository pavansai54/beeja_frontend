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

export const AccountingPage= () => {

    return (
        <Fragment>
        <Navbar bgColor="grey" color="white" text="center">
            ACCOUNTING PAGE
                </Navbar>
        <Table>
            <TableRow>
                <TableRow><TableData><LinkTag to ={"/inv"}> <Button> INVENTORY PAGE</Button></LinkTag></TableData></TableRow>
                
                <TableRow><TableData>
                    <LinkTag to={"/tax"}>
                       <Button> TAX</Button>
                    </LinkTag></TableData></TableRow>
                <TableRow><TableData><Button>PF/ESI</Button></TableData></TableRow>
                <TableRow><TableData><Button>PAY SLIPS</Button></TableData></TableRow>
                <TableRow><TableData><Button>EXPENSES</Button></TableData></TableRow>
                
            </TableRow>
        </Table>
    </Fragment>
)
}
