import React, { Component, Fragment, useState } from 'react'

import Styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { useMutation, gql, useQuery } from '@apollo/client';


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
border:none;
width:230px;
margin-left:5px;
height:20px;
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

export const Personal_Details = () => {
    const { id } = useParams();
    const [personState, setState] = useState({
        name: "",
        code: "",
        email: "",
        role: " ",
        pan_No: "",
        account_No: "",
        ifsc_code: ""
    })


    const DisplayPD = gql`
    query PDDisplay($id:String!){
        personal(id:$id){
            name
            code
            email
            role
            pan_No
            account_No
            ifsc_code
          }
    }
    `;

    const { loading, error, data } = useQuery(DisplayPD, { variables: { id: id } });

    if (loading) return <p>Loading....</p>
    if (error) return <p>ERROR....</p>
    if (data && data.personal) {
        personState.name = data.personal.name;
        personState.code = data.personal.code;
        personState.email = data.personal.email;
        personState.role = data.personal.role;
        personState.pan_No = data.personal.pan_No;
        personState.account_No = data.personal.account_No;
        personState.ifsc_code = data.personal.ifsc_code;
    }

    return (
        <Fragment>

            <Navbar bgColor="grey" color="white">
                Personal Details
                        </Navbar>
            <Break />
            <Container >

                <Table >

                    <TableRow>

                        <TableColumn ><Lable htmlFor="name"> Name</Lable></TableColumn>
                        <TableColumn >:<Input value={personState.name} readOnly /></TableColumn>

                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Empl-Id"> Employee Code </Lable></TableColumn>
                        <TableColumn>:<Input value={personState.code} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Email"> Email </Lable></TableColumn>
                        <TableColumn>:<Input value={personState.email} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Role"> Role</Lable></TableColumn>
                        <TableColumn>:<Input value={personState.role} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="PAN"> PAN</Lable></TableColumn>
                        <TableColumn>:<Input value={personState.pan_No} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Account Number"> Account Number</Lable></TableColumn>
                        <TableColumn>:<Input value={personState.account_No} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="IFSC"> IFSC</Lable></TableColumn>
                        <TableColumn>:<Input value={personState.ifsc_code} readOnly /></TableColumn>
                    </TableRow>
                </Table>

            </Container>

        </Fragment>
    );
}
