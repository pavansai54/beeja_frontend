import { React, Fragment } from "react";
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
height:30px;
font-size:20px;
font-weight:bold;
padding:40px;
vertical-align:bottom;
text-align:left;
&:hover {background-color: grey;}
`;
const TableRow = Styled.tr`
border: 3px solid #ddd;
 &:nth-child(even){background-color: #F2F2F2;}
`;
const Button = Styled.button`
color:black;
background-color: ${props =>
        props.save ? 'powderblue' : 'white'};
height:30px;
font-size:20px;
width:80px;
border-radius:5px;
&:hover {
opacity:0.5;
`;
const Hover = Styled.a`
a:link{
    color: black; 
    text-decoration: none;
  }
`;
export const HR = () => {
    return (

        <Fragment>
            <Navbar bgColor="grey" color="white" text="center">
                HR
                    </Navbar>
            <Table>
                <TableRow>
                    <TableRow><TableData>LEAVE MANAGEMENT</TableData></TableRow>
                    <TableRow><TableData>
                        <Hover href="https://drive.google.com/file/d/1O5XlrbfEO6ZlTeAw762bbXQYoI5Ck0aA/view?usp=sharing">LEAVE POLICY</Hover>
                    </TableData></TableRow>
                    <TableRow><TableData>
                        <LinkTag to={"/personal"}>
                            PERSONAL DETAILS
                        </LinkTag></TableData></TableRow>
                    <TableRow><TableData>OFFER LETTER INCREMENT</TableData></TableRow>
                    <TableRow ><TableData>DOCUMENTS</TableData></TableRow>
                </TableRow>
            </Table>
        </Fragment>
    )
}
