import React, { Fragment, useState } from 'react'
import Styled from '@emotion/styled'
import { Link, useHistory } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import 'react-toastify/dist/ReactToastify.css'
const Navbar = Styled.nav`
background-color: ${props => props.bgColor};
position: sticky;
top:0px;
padding:8px;
color:${props => props.color};
font-size:25px;
`
const Logo = Styled.img`
height:20px;
width:20px
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
export const CreateEmployee = () => {
    const history = useHistory()
    const [formData, createFormData] = useState({
        firstName:"",
        lastName:"",
        designation:"",
        department:"",
        email:"",
        contactNo:"",
        joiningDate:""
    })
    const handleChange = e => {
        createFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };
    const handleSubmit = e => {
		e.preventDefault()
		EmployeeService.createEmployeeDetail(formData)
			.then(function(response) {
               
                alert("Successfully Created!")
				history.push('/list')
			})
			.catch(function(error) {
				console.log(error)
			})
	}
    return (
        <Fragment>
            <Navbar bgColor='grey' color='white'>
                Create an Employee
            </Navbar>
            <Break />
            <Container>
                <Table>
            
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='firstName'> firstName: </Lable>
                        </TableColumn>
                        <TableColumn>
                            <Input
                                type='text'
                                name='firstName'
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
                                onChange={handleChange}
                                required
                            />
                        </TableColumn>
                    </TableRow>
                    <Break/>
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='designation'> designation: </Lable>
                        </TableData>
                        <TableData>
                            <SelectBox
                                className='Selectbox1'
                                name='designation'
                                onChange={handleChange}
                                required
                            >
                                Select an Option
                                <Option disabled selected value>
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
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Lable htmlFor='department'> department: </Lable>
                        </TableColumn>
                        <TableColumn>
                            <SelectBox
                                className='Selectbox1'
                                name='department'
                                onChange={handleChange}
                                required
                            >
                                <Option disabled selected value>
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
                        <TableData>
                            <Lable htmlFor='email'> email: </Lable>
                        </TableData>
                        <TableData>
                            <Input
                                type='email'
                                name='email'
                                defaultValue='@techatcore.com'
                                onChange={handleChange}
                                required
                            />
                            @techatcore.com
                        </TableData>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='contactNo'> contactNo</Lable>
                        </TableData>
                        <TableData>
                            <Input
                                placeholder=' +91 '
                                name='contactNo'
                                onChange={handleChange}
                                type='number'
                                required
                            />
                        </TableData>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='joiningDate' >
                                joiningDate:
                            </Lable>
                        </TableData>
                        <TableData>
                            <Input
                                type='date'
                                placeholder='dd-mm-yyyy'
                                name='joiningDate'
                                onChange={handleChange}
                                required
                            />
                        </TableData>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn>
                            <Button type='Cancel'>
                                <LinkTag to={'/list'}>Cancel</LinkTag>
                            </Button>
                        </TableColumn>
                        <TableColumn>
                            <Button onClick={handleSubmit}>Submit</Button>
                        </TableColumn>
                    </TableRow>
                </Table>
            </Container>
        </Fragment>
    )
}