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
 export const SystemDetails = () =>{

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
const{loading,error,data} = useQuery(GetSystemDetailsByCode,{variables:{code:code}});


if (data && data.systemdetails){
    sysState.name = data.systemdetails.name;
    sysState.code = data.systemdetails.code;
    sysState.config = data.systemdetails.config;
    sysState.device = data.systemdetails.device;
    sysState.devicehistory = data.systemdetails.devicehistory;
    sysState.slno_scode_regno = data.systemdetails. slno_scode_regno

}

return(
    <Fragment>
        <Navbar bgColor="grey" color="white">
            SystemDetails
        </Navbar>
        <Break/>
        <Container>
            <Table>
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Name">Name</Lable>        </TableColumn>
                    <TableColumn>    :<Input value={sysState.name} readOnly/>  </TableColumn>
                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Code">Code</Lable>        </TableColumn>
                    <TableColumn>    :<Input value={sysState.code} readOnly/>  </TableColumn>
                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Device">Device</Lable>        </TableColumn>
                    <TableColumn>    :<Input value={sysState.device} readOnly/>  </TableColumn>
                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="History">History</Lable>        </TableColumn>
                    <TableColumn>    :<Input value={sysState.devicehistory} readOnly/>  </TableColumn>
                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Slno_Scode_regno">Slno_Scode_regno</Lable>        </TableColumn>
                    <TableColumn>    :<Input value={sysState.slno_scode_regno} readOnly/>  </TableColumn>
                </TableRow><Break />
                <TableRow>
                    <TableColumn>    <Lable htmlFor="Config">Config</Lable>        </TableColumn>
                    <TableColumn>    :<Input value={sysState.config} readOnly/>  </TableColumn>
                </TableRow><Break />
            </Table>
        </Container>
    </Fragment>
)
 }