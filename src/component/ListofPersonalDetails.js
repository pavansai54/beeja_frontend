import { React, Fragment, useState } from "react";
import Styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faEdit, faTrash } from '@fortawesome/free-solCode-svg-icons';
import { useQuery, gql, useMutation } from '@apollo/client';
import { faEdit, faTrash, faSearch,faPlus } from '@fortawesome/free-solid-svg-icons'



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
const IdButton = Styled.button`
border:none;
outline:none;
    `;
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`;
const Hover = Styled.a`
&:hover {
    color:blue;
`;
const Input = Styled.input`
border-radius:5px;
width:230px;
margin-left:57%;
height:25px;
font-size:15px;
`;



export const PersonalDetails = () => {
    const { code } = useParams();
    const [empCode, setEmpCode] = useState({ 'CodeToDelete': "" });
    const Show = gql`
   query{ 
    personalList{
        _id
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
 mutation DeletePD($code: String!){
    deletePersonalDetails(code: $code){
 respCode,
 respMessage 
}
}
`;

    const { loading, error, data } = useQuery(Show);
    const [deleteMutation] = useMutation(DELETE_PD);
    const handleDelete = (deleteCode) => {
        if (window.confirm("Do you really want to leave?")) {
            setEmpCode({ 'idToDelete': deleteCode });
            console.log("handleDelte", deleteCode, empCode);
            deleteMutation({ variables: { code: deleteCode } });

        }
        else {

        }
    };

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error</p>;

    console.log(data);
   
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
                        <TableHeading>Code</TableHeading>
                        <TableHeading>Name</TableHeading>
                        <TableHeading>Email</TableHeading>
                        <TableHeading>Role</TableHeading>
                        <TableHeading>PAN</TableHeading>
                        <TableHeading>Account Number</TableHeading>
                        <TableHeading>IFSC Code</TableHeading>
                        <TableHeading>Edit</TableHeading>
                        <TableHeading>Delete</TableHeading>
                    </TableRow>
                    {data.personalList.map((emp, code) => (
                        <TableRow>
                            <a href="">
                                <LinkTag to={`/pd/${emp.code}`}>
                                    <Hover>
                                        <TableData key={code}>{emp.code}</TableData>
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
                                <LinkTag to={`/editpersonal/${emp.code}`}>
                                    <FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon>
                                </LinkTag>
                            </TableData>
                            <TableData style={{ "text-align": "center" }} >

                                <Button onClick={() => handleDelete(emp.code)} >
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

