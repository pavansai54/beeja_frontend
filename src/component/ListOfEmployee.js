import React, { Component, Fragment, useState } from 'react';
import Styled from '@emotion/styled';
import { Link } from 'react-router-dom';
//  import history from './../History';
import { useQuery, gql, useMutation } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

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
const Actionbutton = Styled.button`
height:15px;
width:15px;
display:inline-block;
background-color:rgba(255,255,255,0.7);
border:1px solid gray;
`;

// const TriangleButton = Styled(Actionbutton)`
// border-left: 7px solid transparent;
// border-right:7px solid transparent;
// border-top: 6px dashed;
// `;
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`;

export const ListOfEmployee = () => {
    
    const Show = gql`
{
    employeeList{
    id
    name
    code
    email
    role
    department
    joinedDate
    mobileNo
    }
  }`;

    const [empId, setEmpId] = useState({ 'idToDelete': "" });

    const DELETE_Employee = gql`
    mutation DeleteEmployee($id: String!){
    deleteEmployee(id: $id){
    respCode,
    respMessage 
  }
}
`;
    const {loading, error, data } = useQuery(Show);

    const [deleteMutation] = useMutation(DELETE_Employee);

    const handleDelete = (deleteId) => {
        setEmpId({ 'idToDelete': deleteId });
        console.log("handleDelte", deleteId, empId);
        deleteMutation({ variables: { id: deleteId } });
    };



    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error</p>;

   
       

    return (

        <Fragment>
            {/* <Navbar bgColor="powderblue" color="black">
                    <Logo src={require("../images/Logo.png")} /> 
                    Beeja
                </Navbar>  */}
            <Navbar bgColor="grey" color="white">
                List of Employee
                    <Button >
                    <LinkTag to={"/adding"}>Add Employee</LinkTag>
                </Button>
            </Navbar>
            <Break />
            <Container>
                <Table>
                    <TableRow>
                        <TableHeading> ID</TableHeading>
                        <TableHeading>Employee Name</TableHeading>
                        <TableHeading>Code</TableHeading>
                        <TableHeading>Email</TableHeading>
                        <TableHeading>Role</TableHeading>
                        <TableHeading>Department</TableHeading>
                        <TableHeading>JoiningDate</TableHeading>
                        <TableHeading>MobileNumber</TableHeading>
                        <TableHeading>Edit</TableHeading>
                        <TableHeading>Delete</TableHeading>
                    </TableRow>


                    {data.employeeList.map((employee, id) => (
                        <TableRow>
                            <TableData key={id}>{employee.id}</TableData>
                            <TableData>{employee.name}</TableData>
                            <TableData>{employee.code}</TableData>
                            <TableData>{employee.email}</TableData>
                            <TableData>{employee.role}</TableData>
                            <TableData>{employee.department}</TableData>
                            <TableData>{employee.joinedDate}</TableData>
                            <TableData>{employee.mobileNo}</TableData>

                            <TableData style={{ "text-align": "center" }} >
                                <LinkTag to={`/edit/${employee.id}`}>
                                    <FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon>
                                </LinkTag>
                            </TableData>
                            <TableData style={{ "text-align": "center" }} >
                                <Button onClick={() => handleDelete(employee.id)} >
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </Button>
                            </TableData>
                        </TableRow>
                    )
                    )}
                </Table>
            </Container>
        </Fragment>
    )
}
