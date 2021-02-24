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


export const EmployeeDetails = () => {

    const { id } = useParams();
    const [empState, setState] = useState({
        username: "",
        code: "",
        email: " ",
        mobileNo: "",
        department: "",
        role: "",
        joinedDate: ""
    })
    const GetEmployeeById = gql`
    query EmpDetails($id:String!){
        employee(id:$id){
            name
            code
            email
            mobileNo
            department
            role
            joinedDate
        }
    }
    `;

    const { loading, error, data } = useQuery(GetEmployeeById, { variables: { id: id } });

    if (loading) return <p>Loading....</p>
    if (error) return <p>ERROR....</p>
    if (data && data.employee) {
    empState.name = data.employee.name;
    empState .code = data.employee.code;
    empState.email = data.employee.email;
    empState.mobileNo = data.employee.mobileNo;
    empState.department = data.employee.department;
    empState.role = data.employee.role;
    empState.joinedDate = data.employee.joinedDate;
    }



    return (
        <Fragment>

            <Navbar bgColor="grey" color="white">
                Employee Details
                        </Navbar>
            <Break />
            <Container >

                <Table >

                    <TableRow>

                        <TableColumn ><Lable htmlFor="Name"> Name</Lable></TableColumn>
                        <TableColumn >:<Input value={empState.name} readOnly/></TableColumn>

                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Empl-Id"> Employee Code </Lable></TableColumn>
                        <TableColumn>:<Input  value={empState.code}  readOnly/></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Email"> Email </Lable></TableColumn>
                        <TableColumn>:<Input  value={empState.email}  readOnly/></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn > <Lable htmlFor="Mobile Number"> Mobile Number </Lable></TableColumn>
                        <TableColumn>:<Input value={empState.mobileNo}  readOnly/></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn > <Lable htmlFor="Department"> Department</Lable></TableColumn>
                        <TableColumn>:<Input value={empState.department} readOnly/>
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Role"> Role</Lable></TableColumn>
                        <TableColumn>:<Input value={empState.role}  readOnly/>
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn > <Lable htmlFor="Date-Containerat" className="Selectbox1"> Join Date</Lable></TableColumn>
                        <TableColumn>:<Input value={empState.joinedDate} readOnly/></TableColumn>
                    </TableRow>
                    <Break />
                   
                </Table>

            </Container>

        </Fragment>
    );
}
