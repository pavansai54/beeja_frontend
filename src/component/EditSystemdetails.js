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
wcodeth:20px
`;
const Lable = Styled.label`
font-size:20px;
`;
const Input = Styled.input`
border-radius:5px;
wcodeth:230px;
margin-left:5px;
height:25px;
`;
const Break = Styled.br`
`;
const SelectBox = Styled.select`
&.Selectbox1{
wcodeth: 230px;
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
wcodeth:80px;
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
const TableHeading = Styled.th`
border: 1px solid #ddd;
height: 10px;
padding:8px;
text-align:left;
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


export const EditSystem = () => {

    const {code} =useParams();

    const[sysState,setState] = useState({
        username:"",
        code:"",
        device:"",
        devicehistory:"",
        config:"",
        slno_scode_regno:""
    })
const GetSystemDetailsByCode = gql`
query SysDetails($code:String!){
    systemdetails(code:$code){
        name
        code
        _id
        slno_scode_regno
        config
        device
        devicehistory

    }
}`;

const SystemEdit = gql`
     mutation UpdateSystemDetails($code:String!){
         updatesystem(code:$code,data: {
              name:"${sysState.username}",
              code:"${sysState.code}",
              device:"${sysState.device}",
              devicehistory:"${sysState.devicehistory}",
              config:"${sysState.config}",
              slno_scode_regno:"${sysState.slno_scode_regno}",
               
           })
           {
              respCode, respMessage
                  }
              }
          `;
const{loading,error,data} = useQuery(GetSystemDetailsByCode,{variables:{code:code}});

const [EditMutation] = useMutation(SystemEdit);
if (loading) return <p>Loading....</p>
if (error) return <p>ERROR....</p>

const handleChange = (e) => {
    setState({
        ...sysState,
        [e.target.name]: e.target.value.trim(),

    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sysState);
    EditMutation({variables:{code:code}});
};

  

    return (
        <Fragment>

            <Navbar bgColor="grey" color="white">
                Edit System Details
                        </Navbar>
            <Break />
            <Container >

                <Table >
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Name">Name</Lable>        </TableColumn>
                    <TableColumn ><Input type="text" name="username" defaultValue={data.systemdetails.name}  onChange={handleChange} required /></TableColumn>

                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Code">Code</Lable>        </TableColumn>
                    <TableColumn ><Input type="text" name="code" defaultValue={data.systemdetails.code}  onChange={handleChange} required /></TableColumn>

                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Device">Device</Lable>        </TableColumn>
                    <TableColumn ><Input type="text" name="device" defaultValue={data.systemdetails.device}  onChange={handleChange} required /></TableColumn>

                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="History">History</Lable>        </TableColumn>
                    <TableColumn ><Input type="text" name="devicehistory" defaultValue={data.systemdetails.devicehistory}  onChange={handleChange} required /></TableColumn>

                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Slno_Scode_regno">Slno_Scode_regno</Lable>        </TableColumn>
                    <TableColumn ><Input type="text" name="sln0_scode_regno" defaultValue={data.systemdetails.slno_scode_regno}  onChange={handleChange} required /></TableColumn>

                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Config">Config</Lable>        </TableColumn>
                    <TableColumn ><Input type="text" name="config" defaultValue={data.systemdetails.config}  onChange={handleChange} required /></TableColumn>

                </TableRow><Break />
                <TableRow>
                        <TableColumn ><Button type="Cancel">
                            <LinkTag to={"/inv"}>Cancel</LinkTag>
                        </Button></TableColumn>


                        <TableColumn><Button onClick={handleSubmit}>
                            <LinkTag to={"/inv"}>
                                Submit
                        </LinkTag>
                        </Button></TableColumn>

                    </TableRow>

                </Table>

            </Container>

        </Fragment>
    );
}
