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
`
const TableRow = Styled.tr`
`
const TableColumn = Styled.td`
`
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`
export const EditEmployee = () => {
    const history = useHistory()
    const { id } = useParams()
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [empState, setState] = useState({
        
		
        firstName: '',
        lastname: '',
        designation: ' ',
        department: '',
        email: '',
        contactNo: '',
        joiningDate: '',
    })
    const handleChange = e => {
        setState({
            ...empState,
            [e.target.name]: e.target.value.trim(),
        })
    }
    const User = {
      
        firstName: `${empState.firstName}`,
        lastName: `${empState.lastName}`,
        designation: `${empState.designation}`,
        department: `${empState.department}`,
        email: `${empState.email}`,
        contactNo: `${empState.contactNo}`,
        joiningDate: `${empState.joiningDate}`,
    }
    const HandleSubmit = async e => {
		e.preventDefault()
		EmployeeService.updateEmployeeDetail(User, id)
			.then(result => {
                console.log(result)
				history.push('/list')
			})
			.catch(function(error) {
				console.log(error)
			})
	}

    useEffect(() => {
        EmployeeService.getOneEmployeeDetail(id).then(
            result => {
				
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
                Edit an Employee
            </Navbar>
            <Break />
            <Container>
                <Table>
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='firstName'> FirstName: </Lable>
                        </TableColumn>
                        <TableColumn>
                            <Input
                                type='text'
                                name='firstName'
                                value={empState.firstName}
                                onChange={handleChange}
                                required
                            />
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='lastName'> lastName: </Lable>
                        </TableColumn>
                        <TableColumn>
                            <Input
                                type='text'
                                name='lastName'
                                value={empState.lastName}
                                onChange={handleChange}
                                required
                            />
                        </TableColumn>
                    </TableRow>
                    <Break />
                   
                    <TableRow>
                        <TableColumn>
                            {' '}
                            <Lable htmlFor='designation'> Designation: </Lable>
                        </TableColumn>
                        <TableColumn>
                            {' '}
                            <SelectBox
                                className='Selectbox1'
                                name='designation'
                                value={empState.designation}
                                onChange={handleChange}
                                required
                            >
                                Select an Option
                                <Option disabled selected value>
                                    {' '}
                                    Select an Option
                                </Option>
                                <Option value='ASSOCIATE SOFTWARE ENGINEER'>
                                    {' '}
                                    Associate Software Engineer
                                </Option>
                                <Option value='HR'> HR</Option>
                                <Option value='QA'> QA</Option>
                                <Option value='SOFTWARE ENGINEER'> Software Engineer </Option>
                                <Option value='SR . SOFTWARE ENGINEER'>
                                    {' '}
                                    Sr. Software Engineer
                                </Option>
                                <Option value='TECH LEAD'> Tech Lead</Option>
                            </SelectBox>
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            {' '}
                            <Lable htmlFor='department'> Department: </Lable>
                        </TableColumn>
                        <TableColumn>
                            <SelectBox
                                className='Selectbox1'
                                name='department'
                                value={empState.department}
                                onChange={handleChange}
                                required
                            >
                                <Option disabled selected value>
                                    {' '}
                                    Select an Option
                                </Option>
                                <Option value='HR'> HR </Option>
                                <Option value='ADMIN'> ADMIN </Option>
                                <Option value='ACCOUNTING'> ACCOUNTING </Option>
                                <Option value='IT'> IT </Option>
                            </SelectBox>
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='email'> Email: </Lable>
                        </TableColumn>
                        <TableColumn>
                            <Input
                                type='email'
                                name='email'
                                value={empState.email}
                                onChange={handleChange}
                                required
                            />
                           
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            {' '}
                            <Lable htmlFor='contactNo'> Contact Number </Lable>
                        </TableColumn>
                        <TableColumn>
                            <Input
                                placeholder=' +91 '
                                name='contactNo'
                                value={empState.contactNo}
                                onChange={handleChange}
                                type='number'
                                required
                            />
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='Date-Containerat' className='Selectbox1'>
                                {' '}
                                Joining Date:{' '}
                            </Lable>
                        </TableColumn>
                        <TableColumn>
                            <Input
                                name='joiningDate'
                                value={empState.joiningDate}
                                onChange={handleChange}
                                required
                            />
                        </TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Button type='Cancel'>
                                <LinkTag to={'/list'}>Cancel</LinkTag>
                            </Button>
                        </TableColumn>
                        <TableColumn>
                            
                            <Button onClick={HandleSubmit}>Submit </Button>
                           
                        </TableColumn>
                    </TableRow>
                </Table>
            </Container>
        </Fragment>
    )
}