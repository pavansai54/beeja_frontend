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
export const PersonalDetails = () => {
    const { id } = useParams();
    const [empId, setEmpId] = useState({ 'idToDelete': "" });
    const Show = gql`
   query{ 
    personalList{
        id
        name
        code
        email
        role
        pan_No
        account_No
        ifsc_code
    }
 }`;
    const DELETE_PD = gql`
 mutation DeletePD($id: String!){
    deletePersonalDetails(id: $id){
 respCode,
 respMessage 
}
}
`;

    const { loading, error, data } = useQuery(Show);
    const [deleteMutation] = useMutation(DELETE_PD);
    const handleDelete = (deleteId) => {
        if (window.confirm("Do you really want to leave?")) {
            setEmpId({ 'idToDelete': deleteId });
            console.log("handleDelte", deleteId, empId);
            deleteMutation({ variables: { id: deleteId } });

        }
        else {

        }
    };


    console.log(data);
    if (loading) return <p>loading</p>;
    if (error) return <p>Error</p>;

    return (
        <Fragment>
            <Navbar bgColor="grey" color="white">Personal Details
<Button >
                    <LinkTag to={"/createpresonal"}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>    ADD</LinkTag>
                </Button>
            </Navbar>
            <Break />
            <Container>
                <Table>
                    <TableRow>
                        <TableHeading>ID</TableHeading>
                        <TableHeading>Name</TableHeading>
                        <TableHeading>Email</TableHeading>
                        <TableHeading>Role</TableHeading>
                        <TableHeading>PAN</TableHeading>
                        <TableHeading>Account Number</TableHeading>
                        <TableHeading>IFSC Code</TableHeading>
                        <TableHeading>Edit</TableHeading>
                        <TableHeading>Delete</TableHeading>
                    </TableRow>
                    {data.personalList.map((emp, id) => (
                        <TableRow>
                            <a href="">
                                <LinkTag to={`/pd/${emp.id}`}>
                                    <Hover>
                                        <TableData key={id}>{emp.code}</TableData>
                                    </Hover>
                                </LinkTag>
                            </a>
                            <TableData>{emp.name}</TableData>
                            <TableData>{emp.email}</TableData>
                            <TableData>{emp.role}</TableData>
                            <TableData>{emp.pan_No}</TableData>
                            <TableData>{emp.account_No}</TableData>
                            <TableData>{emp.ifsc_code}</TableData>
                            <TableData style={{ "text-align": "center" }} >
                                <LinkTag to={`/editpersonal/${emp.id}`}>
                                    <FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon>
                                </LinkTag>
                            </TableData>
                            <TableData style={{ "text-align": "center" }} >

                                <Button onClick={() => handleDelete(emp.id)} >
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </Button>

                            </TableData>

                        </TableRow>
                    ))
                    }
                </Table>
            </Container>

        </Fragment>

    )
}

