import React, { Fragment, useState } from 'react'
import Styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export const CreateSystem = () => {
    const [formData, createFormData] = useState({
        username:"",
        code: "",
        device: " ",
        devicehistory: "",
        slno_scode_regno: "",
        config: ""
       
    });

    const SystemdetailsList = gql`
     mutation {
        createSystemDetails(data: {
              name:"${formData.username}",
              code:"${formData.code}",
              device:"${formData.device}",
              devicehistory:"${formData.devicehistory}",
              slno_scode_regno:"${formData.slno_scode_regno}",
              config:"${formData.config}"
               
           })
                  {
                      respCode, respMessage
                  }
              }
          `;
    const [SystemCreate, { loading, error, data }] = useMutation(SystemdetailsList);
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
         SystemCreate();
        showToast();
    };

    toast.configure()
    const showToast = () => {
    if (error)  { 
        toast.info('successful');
    }
};

    return (
        <Fragment>
            <Navbar bgColor="grey" color="white">
                Create an SystemdetailsList
                        </Navbar>
            <Break />
            <Container >
                <Table >
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Name"> Name: </Lable></TableColumn>
                        <TableColumn ><Input type="text" name="username" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Empl-Id"> Employee Id: </Lable></TableColumn>
                        <TableColumn><Input type="text" name="code" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="device"> device: </Lable></TableColumn>
                        <TableColumn><Input type="device" name="device" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="devicehistory"> devicehistory: </Lable></TableColumn>
                        <TableColumn><Input type="devicehistory" name="devicehistory" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="config"> config: </Lable></TableColumn>
                        <TableColumn><Input type="config" name="config" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="slno_scode_regno"> slno_scode_regno: </Lable></TableColumn>
                        <TableColumn><Input type="slno_scode_regno" name="slno_scode_regno" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    

                    <TableRow>
                        <TableColumn >
                            <Button type="Cancel">
                                <LinkTag to={"/inv"}>Cancel</LinkTag>
                            </Button>
                        </TableColumn>

                        <TableColumn>
                            <Button onClick={handleSubmit}>
                                <LinkTag to={"/inv"}>Submit</LinkTag>
                            </Button>
                        </TableColumn>
                    </TableRow>

                </Table>
            </Container>

        </Fragment>
    );
}
