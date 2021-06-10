import React, { Fragment, useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import { Link, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = Styled.nav`
background-color: ${props => props.bgColor};
position: sticky;
top:0px;
padding:8px;
color:${props => props.color};
font-size:25px;
`
const Lable = Styled.label`
font-size:19px;
`
const Input = Styled.input`
font-size:15px;
border:none;
width:230px;
margin-left:5px;
height:20px;
`
const Break = Styled.br`
`
const Button = Styled.button`
color:black;
background-color: powderblue;
height:27px;
font-size: 20px;
outline: none;
border: none;
width: 80px;
float: right;
margin: 1px 15px;
cursor: pointer;
border-radius: 5px;
&:hover {
opacity: 0.5;
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
const TableRow = Styled.tr`
`
const TableData = Styled.td`
padding:10px;
`
const TableBody = Styled.tbody`
`
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`
export const EmployeeDetails = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams()
    const [empState, setState] = useState({
        
		code:'',
        firstName: '',
        lastName: '',
        designation: ' ',
        department: '',
        email: '',
        contactNo: '',
        joiningDate: '',
    })
    useEffect(() => {
        EmployeeService.getOneEmployeeDetail(id).then(
            result => {
				console.log(result)
                setIsLoaded(true)
                setState(result.data)
            },
            error => {
                setIsLoaded(true)
                setError(error)
            }
        )
    }, [id])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    }
    return (
        <Fragment>
            <Navbar bgColor='grey' color='white'>
                Employee Details
                <Button>
                    <LinkTag to={'/list'}>
                        <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
                    </LinkTag>
                </Button>
            </Navbar>
            <Break />
            <Container>
                <Table>
                    <TableBody>
					<TableRow>
                        <TableData>
                            <Lable htmlFor='code'> Code</Lable>
                        </TableData>
                        <TableData>
                            :<Input value={empState.code} readOnly/>
                        </TableData>
                    </TableRow>
			
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='firstName'> FirstName</Lable>
                        </TableData>
                        <TableData>
                            :<Input value={empState.firstName} readOnly/>
                        </TableData>
                    </TableRow>
                  
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='lastName'> LastName</Lable>
                        </TableData>
                        <TableData>
                            :<Input value={empState.lastName} readOnly />
                        </TableData>
                    </TableRow>
                 
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='designation'> Designation</Lable>
                        </TableData>
                        <TableData>
                            :<Input value={empState.designation} readOnly />
                        </TableData>
                    </TableRow>
                  
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='department'>Department </Lable>
                        </TableData>
                        <TableData>
                            :<Input value={empState.department} readOnly />
                        </TableData>
                    </TableRow>
                
                    <TableRow>
                        <TableData>
                            {' '}
                            <Lable htmlFor='email'>Email</Lable>
                        </TableData>
                        <TableData>
                            :<Input value={empState.email} readOnly />
                        </TableData>
                    </TableRow>
            
                    <TableRow>
                        <TableData>
                            {' '}
                            <Lable htmlFor='contactNo'> ContactNo</Lable>
                        </TableData>
                        <TableData>
                            :<Input value={empState.contactNo} readOnly />
                        </TableData>
                    </TableRow>

                    <TableRow>
                        <TableData>
                            <Lable htmlFor='joiningDate'> JoiningDate</Lable>
                        </TableData>
                        <TableData>
                            :<Input value={empState.joiningDate} readOnly />
                        </TableData>
                    </TableRow>

                    </TableBody>
                </Table>
            </Container>
        </Fragment>
    )
}






