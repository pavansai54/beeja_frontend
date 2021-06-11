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
const TableBody = Styled.tbody`
`
const TableRow = Styled.tr`
`
const TableData = Styled.td`
padding:10px;
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
        });
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
        EmployeeService.updateEmployeeDetail(id,User)
            .then(result1 => {
                
                alert("Successfully Updated!!")
                history.push('/list')
            })
            .catch(function (error) {
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
                    <TableBody>
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='firstName'> FirstName: </Lable>
                        </TableData>
                        <TableData>
                            <Input
                                type='text'
                                name='firstName'
                                value={empState.firstName}
                                onChange={handleChange}
                                required
                            />
                        </TableData>
                    </TableRow>
        
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='lastName'> lastName: </Lable>
                        </TableData>
                        <TableData>
                            <Input
                                type='text'
                                name='lastName'
                                value={empState.lastName}
                                onChange={handleChange}
                                required
                            />
                        </TableData>
                    </TableRow>
                   
                    <TableRow>
                        <TableData>

                            <Lable htmlFor='designation'> Designation: </Lable>
                        </TableData>
                        <TableData>
                            
                            <SelectBox
                                className='Selectbox1'
                                name='designation'
                                value={empState.designation}
                                onChange={handleChange}
                                required
                            >
                                Select an Option
                                <Option disabled select value>
                                  
                                    Select an Option
                                </Option>
                                <Option value='ASSOCIATE SOFTWARE ENGINEER'>
                                   
                                    Associate Software Engineer
                                </Option>
                                <Option value='HR'> HR</Option>
                                <Option value='QA'> QA</Option>
                                <Option value='SOFTWARE ENGINEER'> Software Engineer </Option>
                                <Option value='SR . SOFTWARE ENGINEER'>
                                   
                                    Sr. Software Engineer
                                </Option>
                                <Option value='TECH LEAD'> Tech Lead</Option>
                            </SelectBox>
                        </TableData>
                    </TableRow>
             
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='department'> Department: </Lable>
                        </TableData>
                        <TableData>
                            <SelectBox
                                className='Selectbox1'
                                name='department'
                                value={empState.department}
                                onChange={handleChange}
                                required
                            >
                                <Option disabled select value>
                                   
                                    Select an Option
                                </Option>
                                <Option value='HR'> HR </Option>
                                <Option value='ADMIN'> ADMIN </Option>
                                <Option value='ACCOUNTING'> ACCOUNTING </Option>
                                <Option value='IT'> IT </Option>
                            </SelectBox>
                        </TableData>
                    </TableRow>
         
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='email'> Email: </Lable>
                        </TableData>
                        <TableData>
                            <Input
                                type='email'
                                name='email'
                                value={empState.email}
                                onChange={handleChange} readOnly
                                required
                            />
                           
                        </TableData>
                    </TableRow>
               
                    <TableRow>
                        <TableData>
                          
                            <Lable htmlFor='contactNo'> Contact Number </Lable>
                        </TableData>
                        <TableData>
                            <Input
                                placeholder=' +91 '
                                name='contactNo'
                                value={empState.contactNo}
                                onChange={handleChange}
                                type='number'
                                required
                            />
                        </TableData>
                    </TableRow>
                  
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='Date-Containerat' className='Selectbox1'>
                                
                                Joining Date:
                            </Lable>
                        </TableData>
                        <TableData>
                            <Input
                                name='joiningDate'
                                value={empState.joiningDate}
                                onChange={handleChange}
                                required
                            />
                        </TableData>
                    </TableRow>
            
                    <TableRow>
                        <TableData>
                            <Button type='Cancel'>
                                <LinkTag to={'/list'}>Cancel</LinkTag>
                            </Button>
                        </TableData>
                        <TableData>
                            
                            <Button onClick={HandleSubmit}>Submit </Button>
                           
                        </TableData>
                    </TableRow>
                    </TableBody>
                </Table>
            </Container>
        </Fragment>
    )
}
