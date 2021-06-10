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
export const CreateEmployee = () => {

    const customDomains = ['techatcore.com']

    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    const [formData, createFormData] = useState({
        firstName: '',
        lastName: '',
        designation: ' ',
        department: '',
        email:'' ,
        contactNo: '',
        joiningDate: '',
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
   
    console.log(formData.email + customDomains)
    return (
        <Fragment>
            <Navbar bgColor='grey' color='white'>
                Create an Employee
            </Navbar>
            <Break />
            <Container>
                <Table>
            <TableBody>
                    <TableRow>
                     <TableData>
                            <Lable htmlFor='firstName'> firstName: </Lable>
                        </TableData>
                        <TableData>
                            <Input
                             autoComplete='off'
                                type='text'
                                name='firstName'
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
                             autoComplete='off'
                                type='text'
                                name='lastName'
                                onChange={handleChange}
                                required
                            />
                        </TableData>
                    </TableRow>
                 
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
                                <Option disable select value>
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
                            <Lable htmlFor='department'> department: </Lable>
                        </TableData>
                        <TableData>
                            <SelectBox
                          
                                className='Selectbox1'
                                name='department'
                                onChange={handleChange}
                                required
                            >
                                 <Option disable select value>
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
                            <Lable htmlFor='email'> email: </Lable>
                        </TableData>
                        <TableData>
                            
                            <Input
                             autoComplete='off'
                                type='email'
                                name='email'
                                defaultValue='@techatcore.com'
                                 onChange={handleChange}
                                required
                            />
                            
                            {/* <Email 
                                type='email'
                                name='email'
                                autoComplete='off' 
                               domains={customDomains}
                                onChange={handleChange} 
                                />  */}
                        
                        </TableData>
                    </TableRow>
                    
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
                  
                    <TableRow>
                        <TableData>
                            <Lable htmlFor='joiningDate' className='Selectbox1'>
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
                   
                    <TableRow>
                        <TableData>
                            <Button type='Cancel'>
                                <LinkTag to={'/list'}>Cancel</LinkTag>
                            </Button>
                        </TableData>
                        <TableData>
                            <Button onClick={handleSubmit}><LinkTag to={'/list'}>Submit</LinkTag></Button>
                        </TableData>
                    </TableRow>
                    </TableBody>
                </Table>
            </Container>
        </Fragment>
            )
        }
        
