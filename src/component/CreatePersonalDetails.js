import React, { Fragment, useState } from 'react'
import Styled from '@emotion/styled';
import { Link } from 'react-router-dom';
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
export const Create_PersonalDetails=()=>{

    const [formData, createFormData] = useState({
        name:"",
        code: "",
        email: " ",
       role: "",
        pan: "",
       account: "",
        ifsc: ""
    });

    const Personal = gql`
     mutation {
        createPersonalDetails(data:{
              name:"${formData.name}",
              code:"${formData.code}",
              email:"${formData.email}",
              role:"${formData.role}",
              pan_No:"${formData.pan}",
              account_No:"${formData.account}",
              ifsc_code:"${formData.ifsc}"   
           })
                  {
                      respCode, respMessage
                  }
              }
          `;
    const [PDCreate, { loading, error, data }] = useMutation(Personal);
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error</p>;

    const handleChange = (e) => {
        createFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
      PDCreate();
    };
   console.log(formData.name);
    return(
        <Fragment>
            <Navbar bgColor="grey" color="white">
                Add Personal Details
                        </Navbar>
            <Break />
            <Container >
                <Table >
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Name"> Name: </Lable></TableColumn>
                        <TableColumn ><Input type="text" name="name" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Empl-Id"> Employee Code: </Lable></TableColumn>
                        <TableColumn><Input type="text"  name="code" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Email"> Email: </Lable></TableColumn>
                        <TableColumn><Input type="email"  name="email" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                   
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Role"> Role: </Lable></TableColumn>
                        <TableColumn><SelectBox className="Selectbox1" name="role"  onChange={handleChange} required>
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
                        <TableColumn > <Lable htmlFor="PAN"> PAN: </Lable></TableColumn>
                        <TableColumn><Input  name="pan" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Account Number" >Account Number: </Lable></TableColumn>
                        <TableColumn><Input name="account" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="IFSC Code">IFSC Code: </Lable></TableColumn>
                        <TableColumn><Input  name="ifsc" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn >
                            <Button type="Cancel">
                                <LinkTag to={"/personal"}>Cancel</LinkTag>
                            </Button>
                        </TableColumn>

                        <TableColumn>
                            <Button onClick={handleSubmit}>
                                <LinkTag to={"/personal"}>Submit</LinkTag>
                            </Button>
                        </TableColumn>
                    </TableRow>
                </Table>

            </Container>

        </Fragment>
    )
}