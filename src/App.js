import React from 'react';
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import history from './history';
import {LoginPage} from "./component/LoginPage";
import {HomePage} from "./component/HomePage";
import {ListOfEmployee} from "./component/ListOfEmployee";
import {CreateEmployee} from "./component/CreateEmployee";
import {EditEmployee} from "./component/EditEmployee";
import './App.css';
function App() {
  
  return (
   
    <Router history={history}>
    <Switch>
    <Route exact path="/" component={LoginPage}/>
    <Route exact path="/home" component={HomePage}/>
    <Route exact path="/list" component={ListOfEmployee}/>
    <Route exact path="/adding" component={CreateEmployee}/>
    <Route exact path="/edit" component={EditEmployee}/>
    </Switch>
    </Router>
  );
}

export default App;















































// import React,{  Fragment, useState } from 'react'
// import Styled from '@emotion/styled';
// import { Link } from 'react-router-dom';
// import { useMutation,gql } from '@apollo/client';
// const Navbar = Styled.nav`
// background-color: ${(props) => props.bgColor};
// position: sticky;
// top:0px;
// padding:8px;
// color:${(props) => props.color};
// font-size:25px;
// `;
// const Logo = Styled.img`
// height:20px;
// width:20px
// `;
// const Lable = Styled.label`
// font-size:20px;
// `;
// const Input = Styled.input`
// border-radius:5px;
// width:230px;
// margin-left:5px;
// height:25px;
// `;
// const Break = Styled.br`
// `;
// const SelectBox = Styled.select`
// &.Selectbox1{
// width: 230px;
// margin-left:5px;
// border-radius:5px;
// height:25px;
// }
// `;
// const Option = Styled.option`
// `;
// const Button = Styled.button`
// color:black;
// background-color: ${props =>
//  props.save ? 'powderblue' : 'white'};
// height:30px;
// font-size:20px;
// width:80px;
// border-radius:5px;
// &:hover {
// opacity:0.5;
// `;
// const Container = Styled.form`
// display: flex;
// justify-content: center;
// align-items: center;
// padding:20px;
// `;
// const Table = Styled.table`
// `;
// const TableRow = Styled.tr`
// `;
// const TableColumn = Styled.td`
// `;
// const LinkTag = Styled(Link)` 
// color:black; 
// text-decoration:none;
// `;
// const EmployeeList = gql`
//      mutation {
//          createEmployee(data: {
//               name:$name,
//               code:$code,
//               email:$email,
//               mobileNo:$mobileno,
//               department:$department,
//               role:$role,
//              joinedDate:$Joindate   
//            })
//                   {
//                       respCode, respMessage
//                   }
//               }
//           `;
// export  const CreateEmployee =()=> {
    
   
//     const [empState, setEmpState] = useState({

//         name: '',
//         email: '',
//         mobileno:'',
//         role:'',
//         department:'',
//         Joindate:'',
//         code: ''
//       });




//       const printEmployee = ()=>{
//         console.log(empState.name,empState.code,empState.Joindate,empState.department,empState.email,empState.role,empState.mobileno);
//     }

//     // const [{loading, error, data }] = useMutation(EmployeeList);
    
   
//     // if (loading) return "Loading...";
//     // if (error) return "Error";
//     // if (data) return console.log("Data from mutation", data);
//         return (
//             <Fragment>
//                 {/* <Navbar bgColor="powderblue" color="black">
//                 <Logo src={require("../images/Logo.png")}></Logo> Beeja
//                 </Navbar> */}
//                 <Navbar bgColor="grey" color="white">
//                     Create an Employee
//                 </Navbar>
//                 <Break />
//                 <Container >
            
//                 <Table >
                    
//                         <TableRow>
//                             <TableColumn ><Lable htmlFor="Name"> Name: </Lable></TableColumn>
//                             <TableColumn ><Input type="text" value={empState.name} onChange={(e)=>setEmpState({setEmpState,name:e.target.value})}  /></TableColumn>
//                         </TableRow>
//                         <Break />
//                         <TableRow>
//                             <TableColumn ><Lable htmlFor="Empl-Id"> Employee Id: </Lable></TableColumn>
//                             <TableColumn><Input type="text" value={empState.code} onChange={(e)=>setEmpState({setEmpState,code:e.target.value})} required /></TableColumn>
//                         </TableRow>
//                         <Break />
//                         <TableRow>
//                             <TableColumn ><Lable htmlFor="Email"> Email: </Lable></TableColumn>
//                             <TableColumn><Input type="text" value={empState.email} onChange={(e)=>setEmpState({setEmpState,email:e.target.value})}required /></TableColumn>
//                         </TableRow>
//                         <Break />
//                         <TableRow>
//                             <TableColumn > <Lable htmlFor="Mobile Number"> Mobile Number: </Lable></TableColumn>
//                             <TableColumn><Input placeholder=" +91 " type="number"  value={empState.mobileno} onChange={(e)=>setEmpState({setEmpState,mobileno:e.target.value})}  required /></TableColumn>
//                         </TableRow>
//                         <Break />
//                         <TableRow>
//                             <TableColumn > <Lable htmlFor="Department"> Department: </Lable></TableColumn>
//                             <TableColumn><SelectBox className="Selectbox1"  value={empState.department} onChange={(e)=>setEmpState({setEmpState,department:e.target.value})} requried>
//                                 <Option disabled value> Select an Option</Option>
//                                 <Option value="HR"> HR </Option>
//                                 <Option value="ADMIN"> ADMIN </Option>
//                                 <Option value="ACCOUNTING"> ACCOUNTING </Option>
//                                 <Option value="IT"> IT </Option>
//                             </SelectBox></TableColumn>
//                         </TableRow>
//                         <Break />
//                         <TableRow>
//                             <TableColumn ><Lable htmlFor="Role"> Role: </Lable></TableColumn>
//                             <TableColumn><SelectBox className="Selectbox1" value={empState.role}onChange={(e)=>setEmpState({setEmpState,role:e.target.value})} requried>
//                                 <Option disabled value> Select an Option</Option>
//                                 <Option value="ADMIN"> ADMIN </Option>
//                                 <Option value="SUPER ADMIN"> SUPER ADMIN </Option>
//                                 <Option value="ACCOUNTANT"> ACCOUNTANT </Option>
//                                 <Option value="SOFTWARE ENGINEER"> SOFTWARE ENGINEER </Option>
//                                 <Option value="SENIOR-SOFTWARE ENGINEER"> SENIOR-SOFTWARE ENGINEER </Option>
//                             </SelectBox></TableColumn>
//                         </TableRow>
//                         <Break />
//                         <TableRow>
//                             <TableColumn > <Lable htmlFor="Date-Containerat" className="Selectbox1"> Join Date: </Lable></TableColumn>
//                             <TableColumn> <Input type="date"  placeholder="dd-mm-yyyy"value={empState.Joindate}onChange={(e)=>setEmpState({setEmpState,Joindate:e.target.value})} requried/></TableColumn>
//                         </TableRow>
//                         <Break />
//                         <TableRow>
//                             <TableColumn ><Button type="Cancel" > Cancel </Button></TableColumn>
//                             <TableColumn> <Button  type="save" onClick={printEmployee}  >Submit</Button></TableColumn>     </TableRow>                           
//                     </Table>                 
//                 </Container>
//                 </Fragment>
//         );  
// }