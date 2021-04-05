import React, { Component, Fragment, useState, } from 'react';
import Styled from '@emotion/styled';
import { Link, useParams, useHistory } from 'react-router-dom'
import { useQuery, gql, useMutation } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSearch, faTruckLoading } from '@fortawesome/free-solid-svg-icons'

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


export const ListofInventory = () => {
    const{_id,code} = useParams();

    const System = gql`
    {
        systemdetailsList{
            _id
            name
            code
            device
            devicehistory
            config
            respCode
            respMessage
            slno_scode_regno

        }
    }`;
    const [invCode,setInvCode] = useState({'codeToDelete': ""});

    const DELETE_INV  =gql`
    mutation DeleteInventory($code:String!){
        deleteInventory(code: $code){
            respCode,
            respMesssage
        }
    }`;

      
      const { loading, error , data }  = useQuery(System);
      const [deleteMutation] = useMutation(DELETE_INV);

      const handleDelete = (deleteCode) => {
          if(window.confrim ("Do You really want to Delete? ")){
              setInvCode({'codeToDelete' : deleteCode});
              console.log("handleDelete",deleteCode,invCode);
              deleteMutation({variables:{code:deleteCode}});
              
          }
          else{

          }
      };

      if (loading) return <p>Loading..</p>;
      if (error) return <p>ERror</p>;

   
    return (

        <Fragment>
            <Navbar bgColor="grey" color="white">
                List of Inventory
                
                <Button >
                    <LinkTag to={"/cc"}>Add Inventory</LinkTag>
                </Button>
            </Navbar>
            <Break />
            <Container>
                <Table>
                    <TableRow>
                        <TableHeading>ID</TableHeading>
                        <TableHeading>Name</TableHeading>
                        <TableHeading>Device</TableHeading>
                        <TableHeading>Config</TableHeading>
                        <TableHeading>SL.No/S.Code/Reg.No</TableHeading>
                        <TableHeading>DeviceHistory</TableHeading>
                       
                        <TableHeading>Edit</TableHeading>
                        <TableHeading>Delete</TableHeading>
                    </TableRow>


                    {data.systemdetailsList.map((systemdetails,code) => (
                        <TableRow>
                            <a href="">
                                <LinkTag to={`/read/${systemdetails.code}`}>
                                    <Hover>
                                        <TableData key={code}>{systemdetails.code}</TableData>
                                    </Hover>
                                </LinkTag>
                            </a>
                            <TableData>{systemdetails.name}</TableData>
                            <TableData>{systemdetails.device} </TableData>
                            <TableData>{systemdetails.config} </TableData>
                            <TableData>{systemdetails.slno_scode_regno}</TableData>
                            <TableData>{systemdetails.devicehistory}</TableData>
                            <TableData style={{ "text-align": "center" }} >
                                <LinkTag to={`/eedit/${systemdetails.code}`}>
                                    <FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon>
                                </LinkTag>
                            </TableData>
                            <TableData style={{ "text-align": "center" }} >
                                <Button onClick={() => handleDelete(systemdetails.code)} >
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </Button>
                            </TableData>
                        </TableRow>
                    ))}

                   
                </Table>
            </Container>
        </Fragment>
    )
}