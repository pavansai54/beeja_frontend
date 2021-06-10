import React, { Fragment, useState, useEffect, useCallback } from 'react'
import Styled from '@emotion/styled'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEdit,
    faTrash,
    faPlus,
    faHome,
} from '@fortawesome/free-solid-svg-icons'
import EmployeeService from '../services/EmployeeService'
const Navbar = Styled.nav`
background-color: ${props => props.bgColor};
position: sticky;
top: 0px;
padding: 8px;
color: ${props => props.color};
font-size: 20px;
`
const Break = Styled.br`
`
const Button = Styled.button`
color:black;
background-color: powderblue;
height:30px;
font-size: 15px;
outline: none;
border: none;
width: 100px;
float: right;
margin: -1px 15px;
cursor: pointer;
border-radius: 5px;
&:hover {
opacity: 0.5;
`
const Container = Styled.form`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
`
const Table = Styled.table`
border-collapse: collapse;
border: 1px solid #ddd;
width: 100%;
padding: 20px;
`
const TableBody =Styled.tbody`
`
const TableRow = Styled.tr`
border: 1px solid #ddd;
&::nth-of-type(even){background-color: #F2F2F2;}
&:hover {background-color: #ddd;}
`
const TableData = Styled.td`
border: 1px solid #ddd;
height: 30px;
vertical-align: bottom;
text-align:left;
`
const TableHeading = Styled.th`
border: 1px solid #ddd;
height: 10px;
padding:8px;
text-align:left;
`
const Input = Styled.input`
border-radius:5px;
width:230px;
margin-left:47%;
height:24px;
font-size:15px;
`
export const ListOfEmployee = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setdata] = useState([])


    const deleteEmployee = useCallback(id => {
        EmployeeService.deleteEmployeeDetail(id)
		.then(function(response) {
			setIsLoaded(false)
		})
		.catch(function(error) {
			console.log(error)
		})
    }, [])

    useEffect(() => {
        if (!isLoaded && data !== []) {
            EmployeeService.getAllEmployeeDetail().then(
                result => {
                    setIsLoaded(true)
					console.log(result.data)
                    setdata(result.data)
                },
                error => {
                    setIsLoaded(true)
                }
            )
        }
    }, [isLoaded])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <Fragment>
                <Navbar bgColor='grey' color='white'>
                    List of Employee
                    <Input type='text' placeholder='Search'></Input>
                    <Button>
                        <Link to={'/home'} style={{ 'color': 'black'}}>
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> home
                        </Link>
                    </Button>
                    <Button>
                        <Link to={'/adding'} style={{ 'color': 'black'}}>
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add
                        </Link>
                    </Button>
                </Navbar>
                <Break />
                <Container>
                    <Table>
                        <TableBody>
                        <TableRow>
							<TableHeading>Code</TableHeading>
                            <TableHeading>FirstName</TableHeading>
                            <TableHeading>LastName</TableHeading>
                            <TableHeading>Designation</TableHeading>
                            <TableHeading>Department</TableHeading>
                            <TableHeading>Email</TableHeading>
                            <TableHeading>ContactNo</TableHeading>
                            <TableHeading>joiningDate</TableHeading>
                            <TableHeading>Edit</TableHeading>
                            <TableHeading>Delete</TableHeading>
                        </TableRow>
                        {data.map(employee => (
                            <TableRow key={employee._id}>  
								<TableData >
                                <Link to={`/display/${employee._id}`}  style={{ 'color': 'black'}} >
                                    {employee.code}
                                </Link>
                                </TableData>
                                <TableData>{employee.firstName}</TableData>
                                <TableData>{employee.lastName}</TableData>
                                <TableData>{employee.designation}</TableData>
								<TableData>{employee.department}</TableData>
                                <TableData>{employee.email}</TableData>
                                <TableData>{employee.contactNo}</TableData>
                                <TableData>{employee.joiningDate}</TableData>
                                <TableData style={{ 'textAlign': 'center','color':'black' }}>
                                    <Link to={`/edit/${employee._id}`}>
                                        <FontAwesomeIcon style={{ 'color': 'black'}} icon={faEdit}></FontAwesomeIcon>
                                    </Link >
                                </TableData>
                                <TableData style={{ 'textAlign': 'center'}}>
                                    <Link to='/list' >
                                        <FontAwesomeIcon style={{ 'color': 'black'}}
                                            icon={faTrash}
                                            onClick={() => deleteEmployee(employee._id)}
                                        ></FontAwesomeIcon>
                                    </Link>
                                </TableData>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Container>
            </Fragment>
        )
}}
