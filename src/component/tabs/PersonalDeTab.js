import React, { Fragment, useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import { Link, useParams, useHistory } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
const Navbar = Styled.nav`
background-color: ${props => props.bgColor};
position: sticky;
top:0px;
padding:8px;
color:${props => props.color};
font-size:25px;
`
const Lable = Styled.label`
font-size:20px;
`
const Input = Styled.input`
border-radius:5px;
width:230px;
margin-left:5px;
height:25px;
`
const Break = Styled.br`
`
const SelectBox = Styled.select`
&.Selectbox1{
width: 230px;
margin-left:5px;
border-radius:5px;
height:25px;
}
`
const Option = Styled.option`
`
const Button = Styled.button`
color:black;
background-color: ${props => (props.save ? 'powderblue' : 'white')};
height:30px;
font-size:20px;
width:80px;
border-radius:5px;
&:hover {
opacity:0.5;
`
const Container = Styled.form`
display: flex;
justify-content: center;
align-items: center;
padding:20px;
`
const Table = Styled.table`
padding-top:15px;
`
const TableBody = Styled.tbody`
`
const TableRow = Styled.tr`
`
const TableData = Styled.td`
padding:15px;
`
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`

export const PersonalTab =()=>{
    return(
        <Fragment>
            <Break/>
            <Container>
                <Table>
                    <TableBody>
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='aadhar'> Aadhar Card: </Lable>
                        </TableData>
                        <TableData>
                        <Input/>
                        </TableData>
                    </TableRow>

                    <TableRow>
                        <TableData>
                            <Lable htmlFor='pan'> PAN Card: </Lable>
                        </TableData>
                        <TableData>
                        <Input/>
                        </TableData>
                    </TableRow>

                    <TableRow>
                        <TableData>
                            <Lable htmlFor='designation'> Designation: </Lable>
                        </TableData>
                        <TableData>
                        <Input/>
                        </TableData>
                    </TableRow>

                    <TableRow>
                        <TableData>
                            <Lable htmlFor='email'> Email: </Lable>
                        </TableData>
                        <TableData>
                        <Input/>
                        </TableData>
                    </TableRow>

                    <TableRow>
                        <TableData>
                            <Lable htmlFor='contact No'> contactNo: </Lable>
                        </TableData>
                        <TableData>
                        <Input/>
                        </TableData>
                    </TableRow>

                    <TableRow>
                        <TableData>
                            <Lable htmlFor='Joining Date'> Joining Date </Lable>
                        </TableData>
                        <TableData>
                            <Input></Input>
                        </TableData>
                        
                    </TableRow>
            
                    <TableRow>
                        <TableData>
                            <Button type='Cancel'>
                                <LinkTag to={'/list'}>Cancel</LinkTag>
                            </Button>
                        </TableData>
                        <TableData>
                            <Button >Submit</Button>
                        </TableData>
                    </TableRow>
                    
                    </TableBody>
                </Table>
            </Container>

        </Fragment>
    )
}