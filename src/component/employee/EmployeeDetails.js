import React, { Fragment, useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import { Link, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import { faBackward, faHome } from '@fortawesome/free-solid-svg-icons'
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
font-size:20px;
`
const Input = Styled.input`
border:none;
width:230px;
margin-left:5px;
height:20px;
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
`
const TableData = Styled.td`
`
const TableRow = Styled.tr`
`
const TableColumn = Styled.td`
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
    }, [])

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
					<TableRow>
                        <TableColumn>
                            <Lable htmlFor='code'> Code</Lable>
                        </TableColumn>
                        <TableColumn>
                            :<Input value={empState.code} />
                        </TableColumn>
                    </TableRow>
					<Break/>
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='firstName'> FirstName</Lable>
                        </TableColumn>
                        <TableColumn>
                            :<Input value={empState.firstName} />
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='lastName'> LastName</Lable>
                        </TableColumn>
                        <TableColumn>
                            :<Input value={empState.lastName} readOnly />
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='designation'> Designation</Lable>
                        </TableColumn>
                        <TableColumn>
                            :<Input value={empState.designation} readOnly />
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='department'>Department </Lable>
                        </TableColumn>
                        <TableColumn>
                            :<Input value={empState.department} readOnly />
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            {' '}
                            <Lable htmlFor='email'>Email </Lable>
                        </TableColumn>
                        <TableColumn>
                            :<Input value={empState.email} readOnly />
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            {' '}
                            <Lable htmlFor='contactNo'> ContactNo</Lable>
                        </TableColumn>
                        <TableColumn>
                            :<Input value={empState.contactNo} readOnly />
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='joiningDate'> JoiningDate</Lable>
                        </TableColumn>
                        <TableColumn>
                            :<Input value={empState.joiningDate} readOnly />
                        </TableColumn>
                    </TableRow>
                    <Break />
                </Table>
            </Container>
        </Fragment>
    )
}