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

    const { id } = useParams();


    const [empState, setState] = useState({
        username: "",
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

    const EditPd = gql`
     mutation UpdatePersonalDetail($id: String!){
        updatepersonalDetail(id:$id,data: {
              name:"${empState.username}",
              code:"${empState.code}",
              email:"${empState.email}",
              role:"${empState.role}",
              pan_No:"${empState.pan_No}",
              account_No:"${empState.account_No}",
              ifsc_code:"${empState.ifsc_code}",
           })
           {
              respCode, respMessage
                  }
              }
          `;
    const { loading, error, data } = useQuery(DisplayPD, { variables: { id: id } });

    const [EditMutation] = useMutation(EditPd);
    if (loading) return <p>Loading....</p>
    if (error) return <p>ERROR....</p>


    const handleChange = (e) => {
        setState({
            ...empState,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(empState);
        EditMutation({ variables: { id: id } });

    };

    return (
        <Fragment>

            <Navbar bgColor="grey" color="white">
                Edit Personal Details
                        </Navbar>
            <Break />
            <Container >

                <Table >

                    <TableRow>

                        <TableColumn ><Lable htmlFor="Name"> Name:</Lable></TableColumn>
                        <TableColumn ><Input type="text" name="username" defaultValue={data.personal.name} onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Empl-Id"> Employee Id: </Lable></TableColumn>
                        <TableColumn><Input type="text" name="code" defaultValue={data.personal.code} onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Email"> Email: </Lable></TableColumn>
                        <TableColumn><Input type="email" name="email" defaultValue={data.personal.email} onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Role"> Role: </Lable></TableColumn>
                        <TableColumn><SelectBox className="Selectbox1" name="role" defaultValue={data.personal.role} onChange={handleChange} required>
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
                        <TableColumn ><Lable htmlFor="PAN"> PAN: </Lable></TableColumn>
                        <TableColumn><Input name="pan_No" defaultValue={data.personal.pan_No} onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="AccountNumber">Account Number: </Lable></TableColumn>
                        <TableColumn><Input name="account_No" defaultValue={data.personal.account_No} onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="IFSC">IFSC: </Lable></TableColumn>
                        <TableColumn><Input name="ifsc_code" defaultValue={data.personal.ifsc_code} onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />

                    <TableRow>
                        <TableColumn ><Button type="Cancel">
                            <LinkTag to={"/personal"}>Cancel</LinkTag>
                        </Button></TableColumn>


                        <TableColumn><Button onClick={handleSubmit}>
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
