import React, { Component, Fragment, useState } from 'react'

import Styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { useMutation, gql, useQuery } from '@apollo/client';
import { ListOfEmployee } from './ListOfEmployee';
import { graphql } from 'graphql';

const Navbar = Styled.nav`
background-color: ${(props) => props.bgColor};
position: sticky;
top:0px;
padding:8px;
color:${(props) => props.color};
font-size:25px;
`;
const Logo = Styled.img`
height:20px;
width:20px
`;
const Lable = Styled.label`
font-size:20px;
`;
const Input = Styled.input`
border-radius:5px;
width:230px;
margin-left:5px;
height:25px;
`;
const Break = Styled.br`
`;
const SelectBox = Styled.select`
&.Selectbox1{
width: 230px;
margin-left:5px;
border-radius:5px;
height:25px;
}
`;
const Option = Styled.option`
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
const Container = Styled.form`
display: flex;
justify-content: center;
align-items: center;
padding:20px;
`;
const Table = Styled.table`
`;
const TableData = Styled.td`
`;
const TableRow = Styled.tr`
`;
const TableColumn = Styled.td`
`;
const LinkTag = Styled(Link)` 
color:black; 
text-decoration:none;
`;
export const EditPersonalDetails = () => {
return(
    <Fragment>

    <Navbar bgColor="grey" color="white">
        Edit an Employee
                </Navbar>
    <Break />
    <Container >

        <Table >

            <TableRow>

                <TableColumn ><Lable htmlFor="Name"> Name:</Lable></TableColumn>
                <TableColumn ><Input type="text" required /></TableColumn>

            </TableRow>
            <Break />
            <TableRow>
                <TableColumn ><Lable htmlFor="Empl-Id"> Employee Id: </Lable></TableColumn>
                <TableColumn><Input type="text"  required /></TableColumn>
            </TableRow>
            <Break />
            <TableRow>
                <TableColumn ><Lable htmlFor="Email"> Email: </Lable></TableColumn>
                <TableColumn><Input type="email"  required /></TableColumn>
            </TableRow>
            <Break />
            <TableRow>
                <TableColumn > <Lable htmlFor="Mobile Number"> Mobile Number: </Lable></TableColumn>
                <TableColumn><Input placeholder=" +91 "  type="number" required /></TableColumn>
            </TableRow>
            <Break />
            <TableRow>
                <TableColumn > <Lable htmlFor="Department"> Department: </Lable></TableColumn>
                <TableColumn><SelectBox className="Selectbox1" required>
                    <Option disabled selected value> Select an Option</Option>
                    <Option value="HR"> HR </Option>
                    <Option value="ADMIN"> ADMIN </Option>
                    <Option value="ACCOUNTING"> ACCOUNTING </Option>
                    <Option value="IT"> IT </Option>
                </SelectBox></TableColumn>
            </TableRow>
            <Break />
            <TableRow>
                <TableColumn ><Lable htmlFor="Role"> Role: </Lable></TableColumn>
                <TableColumn><SelectBox className="Selectbox1"  required>
                    <Option disabled selected value> Select an Option</Option>
                    <Option value="ADMIN"> ADMIN </Option>
                    <Option value="SUPER ADMIN"> SUPER ADMIN </Option>
                    <Option value="ACCOUNTANT"> ACCOUNTANT </Option>
                    <Option value="SOFTWARE ENGINEER"> SOFTWARE ENGINEER </Option>
                    <Option value="SENIOR-SOFTWARE ENGINEER"> SENIOR-SOFTWARE ENGINEER </Option>
                </SelectBox></TableColumn>
            </TableRow>
            <Break />
            <TableRow>
                <TableColumn > <Lable htmlFor="Date-Containerat" className="Selectbox1"> Join Date: </Lable></TableColumn>
                <TableColumn> <Input type="date" placeholder="dd-mm-yyyy" required /></TableColumn>
            </TableRow>
            <Break />
            <TableRow>
                <TableColumn ><Button type="Cancel">
                    <LinkTag to={"/personal"}>Cancel</LinkTag>
                </Button></TableColumn>


                <TableColumn><Button >
                    <LinkTag to={"/personal"}>
                        Submit
                </LinkTag>
                </Button></TableColumn>

            </TableRow>

        </Table>

    </Container>

</Fragment>
);

}