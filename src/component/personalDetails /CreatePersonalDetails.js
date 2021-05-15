import React, { Fragment, useState } from 'react'
import Styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PersonalDetailService from '../services/PersonalDetailService';

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
        Name:"",
        code: "",
        Email: " ",
        Mobile: "",
        PanCard_No: "",
        Account_No: "",
        Ifsc_Code: ""
    });

   

    const handleChange = (e) => {
        createFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
       PersonalDetailService.createPersonalDetail(formData)
            .then(function (response) {
                console.log(response)
                    window.location.replace("/personal")
            })
            .catch(function (error) {
                console.log(error)
            })
    };


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
                        <TableColumn ><Input type="text" name="Name" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Empl-Id"> Employee Code: </Lable></TableColumn>
                        <TableColumn><Input type="text"  name="code" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Email"> Email: </Lable></TableColumn>
                        <TableColumn><Input type="email"  name="Email" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn > <Lable htmlFor="Mobile Number"> Mobile Number: </Lable></TableColumn>
                        <TableColumn><Input placeholder=" +91 " name="Mobile" onChange={handleChange} type="number" required /></TableColumn>
                    </TableRow>
                    {/* <TableRow>
                        <TableColumn ><Lable htmlFor="Role"> Role: </Lable></TableColumn>
                        <TableColumn><SelectBox className="Selectbox1" name="role"  onChange={handleChange} required>
                            <Option disabled selected value> Select an Option</Option>
                            <Option value="ADMIN"> ADMIN </Option>
                            <Option value="SUPER ADMIN"> SUPER ADMIN </Option>
                            <Option value="ACCOUNTANT"> ACCOUNTANT </Option>
                            <Option value="SOFTWARE ENGINEER"> SOFTWARE ENGINEER </Option>
                            <Option value="SENIOR-SOFTWARE ENGINEER"> SENIOR-SOFTWARE ENGINEER </Option>
                        </SelectBox></TableColumn>
                    </TableRow> */}
                    <Break />
                    <TableRow>
                        <TableColumn > <Lable htmlFor="PAN"> PAN: </Lable></TableColumn>
                        <TableColumn><Input  name="PanCard_No" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Account Number" >Account Number: </Lable></TableColumn>
                        <TableColumn><Input name="Account_No" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="IFSC Code">IFSC Code: </Lable></TableColumn>
                        <TableColumn><Input  name="Ifsc_Code" onChange={handleChange} required /></TableColumn>
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
                            Submit
                                {/* <LinkTag to={"/personal"}></LinkTag> */}
                            </Button>
                        </TableColumn>
                    </TableRow>
                </Table>

            </Container>

        </Fragment>
    )
}