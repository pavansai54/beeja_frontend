import React, {  Fragment, useState, useEffect } from 'react'
import Styled from '@emotion/styled';
import { Link, useParams,useHistory } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const Navbar = Styled.nav`
background-color: ${(props) => props.bgColor};
position: sticky;
top:0px;
padding:8px;
color:${(props) => props.color};
font-size:25px;
`;
const Logo = Styled.img`
height:20px;
width:20px
`;
const Lable = Styled.label`
font-size:20px;
`;
const Input = Styled.input`
border-radius:5px;
width:230px;
margin-left:5px;
height:25px;
`;
const Break = Styled.br`
`;
const SelectBox = Styled.select`
&.Selectbox1{
width: 230px;
margin-left:5px;
border-radius:5px;
height:25px;
}
`;
const Option = Styled.option`
`;
const Button = Styled.button`
color:black;
background-color: ${props =>
        props.save ? 'powderblue' : 'white'};
height:30px;
font-size:20px;
width:80px;
border-radius:5px;
&:hover {
opacity:0.5;
`;
const Container = Styled.form`
display: flex;
justify-content: center;
align-items: center;
padding:20px;
`;
const Table = Styled.table`
`;
const TableData = Styled.td`
`;
const TableRow = Styled.tr`
`;
const TableColumn = Styled.td`
`;
const LinkTag = Styled(Link)` 
color:black; 
text-decoration:none;
`;


export const EditEmployee = () => {
    const history = useHistory();
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [empState, setState] = useState({
        name: '',
        code: "",
        email: " ",
        mobile: "",
        department: "",
        joinedDate: "",
        role: ""
    })


    const handleChange = (e) => {
        setState({
            ...empState,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const User = ({
        name: `${empState.name}`,
        email: `${empState.email}`,
        mobile: `${empState.mobile}`,
        department: `${empState.department}`,
        joinedDate: `${empState.joinedDate}`,
        role: `${empState.role}`
    })

    const HandleSubmit = async (e) => {
        e.preventDefault();
        EmployeeService.updateEmployeeDetail(User,id)
            .then((result) => {
                history.push('/list');
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(() => {
        EmployeeService.getOneEmployeeDetail(id)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setState(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (
        <Fragment>
            <Navbar bgColor="grey" color="white">
                Edit an Employee
            </Navbar>
            <Break />
            <Container >
                <Table >
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Name"> Name:</Lable></TableColumn>
                        <TableColumn ><Input type="text" name="name" value={empState.name} onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Empl-Id"> Employee Id: </Lable></TableColumn>
                        <TableColumn><Input type="text" name="code" value={empState.code} required readOnly /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Email"> Email: </Lable></TableColumn>
                        <TableColumn><Input type="email" name="email" value={empState.email} onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn > <Lable htmlFor="Mobile Number"> Mobile Number: </Lable></TableColumn>
                        <TableColumn><Input placeholder=" +91 " name="mobile" value={empState.mobile} onChange={handleChange} type="number" required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn > <Lable htmlFor="Department"> Department: </Lable></TableColumn>
                        <TableColumn><SelectBox className="Selectbox1" name="department" value={empState.department} onChange={handleChange} required>
                            <Option disabled selected value> Select an Option</Option>
                            <Option value="HR"> HR </Option>
                            <Option value="ADMIN"> ADMIN </Option>
                            <Option value="ACCOUNTING"> ACCOUNTING </Option>
                            <Option value="IT"> IT </Option>
                        </SelectBox></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Role"> Role: </Lable></TableColumn>
                        <TableColumn><SelectBox className="Selectbox1" name="role" value={empState.role} onChange={handleChange} required>
                            <Option disabled selected value> Select an Option</Option>
                            <Option value="ADMIN"> ADMIN </Option>
                            <Option value="SUPER ADMIN"> SUPER ADMIN </Option>
                            <Option value="ACCOUNTANT"> ACCOUNTANT </Option>
                            <Option value="SOFTWARE ENGINEER"> SOFTWARE ENGINEER </Option>
                            <Option value="SENIOR-SOFTWARE ENGINEER"> SENIOR-SOFTWARE ENGINEER </Option>
                        </SelectBox></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn > <Lable htmlFor="Date-Containerat" className="Selectbox1"> Join Date: </Lable></TableColumn>
                        <TableColumn> <Input type="date" placeholder="dd-mm-yyyy" name="joinedDate" value={empState.joinedDate} onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Button type="Cancel">
                            <LinkTag to={"/list"}>Cancel</LinkTag>
                        </Button></TableColumn>
                        <TableColumn><Button onClick={HandleSubmit}>
                            Submit
                        </Button></TableColumn>
                    </TableRow>
                </Table>
            </Container>

        </Fragment>
    );
}
