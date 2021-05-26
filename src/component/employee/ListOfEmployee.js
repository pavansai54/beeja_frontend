import React, { Fragment, useState, useEffect, useCallback } from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faEdit,
	faTrash,
	faSearch,
	faPlus,
	faHome,
	faList,
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
const Logo = Styled.img`
height: 30px;
width: 30px;
margin-bottom: -5px;
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
const TableRow = Styled.tr`
border: 1px solid #ddd;
&:nth-child(even){background-color: #F2F2F2;}
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
const Actionbutton = Styled.button`
height:15px;
width:15px;
display:inline-block;
background-color:rgba(255,255,255,0.7);
border:1px solid gray;
`
const IdButton = Styled.button`

`
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`
const Hover = Styled.a`
&:hover {
    color:blue;
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

	const deletedEmployee = useCallback(id => {
		EmployeeService.deleteEmployeeDetail(id)
			.then(function(response) {
				setIsLoaded(false)
			})
			.catch(function(error) {
				console.log(error)
			})
	}, [])

	useEffect(() => {
		if (!isLoaded && data != []) {
			EmployeeService.getAllEmployeeDetail().then(
				result => {
					setIsLoaded(true)
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
						<LinkTag to={'/home'}>
							<FontAwesomeIcon icon={faHome}></FontAwesomeIcon> home
						</LinkTag>
					</Button>
					<Button>
						<LinkTag to={'/adding'}>
							<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add
						</LinkTag>
					</Button>
				</Navbar>
				<Break />
				<Container>
					<Table>
						<TableRow>
							<TableHeading>ID</TableHeading>
							<TableHeading>Name</TableHeading>
							<TableHeading>Email</TableHeading>
							<TableHeading>Role</TableHeading>
							<TableHeading>Department</TableHeading>
							<TableHeading>JoiningDate</TableHeading>
							<TableHeading>MobileNumber</TableHeading>
							<TableHeading>Edit</TableHeading>
							<TableHeading>Delete</TableHeading>
						</TableRow>

						{data.map(employee => (
							<TableRow>
								<LinkTag to={`/display/${employee._id}`}>
									<TableData key={employee._id}>{employee.code}</TableData>
								</LinkTag>
								<TableData>{employee.name}</TableData>
								<TableData>{employee.email}</TableData>
								<TableData>{employee.role}</TableData>
								<TableData>{employee.department}</TableData>
								<TableData>{employee.joinedDate}</TableData>
								<TableData>{employee.mobile}</TableData>
								<TableData style={{ 'text-align': 'center' }}>
									<LinkTag to={`/edit/${employee._id}`}>
										<FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
									</LinkTag>
								</TableData>
								<TableData style={{ 'text-align': 'center' }}>
									<LinkTag>
										<FontAwesomeIcon
											icon={faTrash}
											onClick={() => deletedEmployee(employee._id)}
										></FontAwesomeIcon>
									</LinkTag>
								</TableData>
							</TableRow>
						))}
					</Table>
				</Container>
			</Fragment>
		)
	}
}
