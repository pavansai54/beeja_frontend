import { React, Fragment, useState } from "react";
import Styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useQuery, gql, useMutation } from '@apollo/client';


const Navbar = Styled.nav`
background-color: ${(props) => props.bgColor};
position: sticky;
top: 0px;
padding: 8px;
color: ${(props) => props.color};
font-size: 20px;
`;
const Logo = Styled.img`
height: 30px;
width: 30px;
margin-bottom: -5px;
`;
const Break = Styled.br`
`;
const Button = Styled.button`
color:black;
background-color: powderblue;
height:27px;
margin-top: -3px;
font-size: 13px;
outline: none;
border: none;
width: 100px;
float: right;
border-radius: 5px;
&:hover {
opacity: 0.5;
`;
const Container = Styled.form`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
`;
const Table = Styled.table`
border-collapse: collapse;
border: 1px solid #ddd;
width: 100%;
padding: 20px;
`;
const TableRow = Styled.tr`
border: 1px solid #ddd;
&:nth-child(even){background-color: #F2F2F2;}
&:hover {background-color: #ddd;}
`;
const TableData = Styled.td`
border: 1px solid #ddd;
height: 30px;
vertical-align: bottom;
text-align:left;
`;
const TableHeading = Styled.th`
border: 1px solid #ddd;
height: 10px;
padding:8px;
text-align:left;
`;
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`;
const Hover = Styled.a`
&:hover {
    color:blue;
`;
export const InventoryPage= () => {

    return (
        <Fragment>
            <Navbar bgColor="grey" color="white">Inventory Page
            <Button >
                   <LinkTag to={"/create"} >
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> ADD
                        </LinkTag>
                </Button>
            </Navbar>
            <Break />
            <Container>
                <Table>
                    <TableRow>
                        <TableHeading>ID</TableHeading>
                        <TableHeading>Name</TableHeading>
                        <TableHeading>Device</TableHeading>
                        <TableHeading>Config</TableHeading>
                        <TableHeading>SL.No/S.Code/Reg.No</TableHeading>
                        <TableHeading>DeviceHistory</TableHeading>
                        <TableHeading>Edit</TableHeading>
                        <TableHeading>Delete</TableHeading>
                    </TableRow>
                  </Table>
            </Container>
        </Fragment>

    )
}

