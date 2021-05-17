import React, { Fragment, useState, useEffect } from 'react'
import Styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import PersonalDetailService from '../services/PersonalDetailService';
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
background-color: powderblue;
height:27px;
font-size: 20px;
outline: none;
border: none;
width: 80px;
float: right;
margin: -1px 15px;
cursor: pointer;
border-radius: 5px;
&:hover {
opacity: 0.5;
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
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();

    const [personState, setState] = useState({
        Name: "",
        code: "",
        Email: " ",
        Mobile: "",
        PanCard_No: "",
        Account_No: "",
        Ifsc_Code: ""
    })

    useEffect(() => {
        PersonalDetailService.getOnePersonalDetail(id)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setState(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;

    }
    return (
        <Fragment>
            <Navbar bgColor="grey" color="white">
                <Button>
                    <LinkTag to={"/listpersonal"}>
                        <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
                    </LinkTag>
                </Button>
                Personal Details
            </Navbar>
            <Break />
            <Container >
                <Table >
                    <TableRow>
                        <TableColumn ><Lable htmlFor="name"> Name</Lable></TableColumn>
                        <TableColumn >:<Input value={personState.Name} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Empl-Id"> Employee Code </Lable></TableColumn>
                        <TableColumn>:<Input value={personState.code} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Email"> Email </Lable></TableColumn>
                        <TableColumn>:<Input value={personState.Email} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Mobile"> Mobile</Lable></TableColumn>
                        <TableColumn>:<Input value={personState.Mobile} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="PanCard_No"> PanCard_No</Lable></TableColumn>
                        <TableColumn>:<Input value={personState.PanCard_No} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Account Number"> Account Number</Lable></TableColumn>
                        <TableColumn>:<Input value={personState.Account_No} readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="IFSC"> Ifsc_Code</Lable></TableColumn>
                        <TableColumn>:<Input value={personState.Ifsc_Code} readOnly /></TableColumn>
                    </TableRow>
                </Table>
            </Container>
        </Fragment>
    );
}
