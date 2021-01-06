import React, { Component, Fragment } from 'react'
import Styled from '@emotion/styled';
import ListsofEmployees from "./ListOfEmployee";
import {Link} from 'react-router-dom';
import { useQuery, gql,useMutation } from '@apollo/client';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';

const Navbar = Styled.nav`
background-color: ${(props) => props.bgColor};
color: ${(props) => props.color};
position: sticky;
top: 0px;
font-size: 20px;
padding: 8px;
text-align:${(props)=>props.text};
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

export const HomePage =()=>{

    
    // if (loading) return <p>Loading ...</p>;
    // if (error) return <p>Error</p>;

        return (
            <Fragment>
                {/* <Navbar bgColor="powderblue" color="black">
                    <Logo src={require("../images/Logo.png") } /> Beeja
                </Navbar> */}
                <Navbar bgColor="grey" color="white" text="center">
                    Home page
                    </Navbar>
                    <Table>
                        <TableRow>
                        <TableRow><TableData> HR</TableData></TableRow>
                        <TableRow><TableData> ACCOUNTING</TableData></TableRow>
                        <TableRow><TableData>
                            <LinkTag to={"/list"}>
                            EMOPLOYEE DIRECTORY
                            </LinkTag>
                            </TableData></TableRow>
                        <TableRow><TableData> CLIENT</TableData></TableRow>
                       {/* {data.deleteEmployee.map((id) =>( */}
                        <TableRow><TableData> 
                            
                             </TableData></TableRow>
                              {/* ))}  */}
                       </TableRow>
                    </Table>
            </Fragment>
        )
    }