import React from 'react';
import { Route,Router, Switch } from "react-router-dom";
import history from './history';
import { LoginPage } from "./component/LoginPage";
import { HomePage } from "./component/HomePage";
import { ListOfEmployee } from "./component/ListOfEmployee";
import { CreateEmployee } from "./component/CreateEmployee";
import { EditEmployee } from "./component/EditEmployee";
import { EmployeeDetails } from "./component/EmployeeDetails";
import { HR } from "./component/HR_Page";
import { PersonalDetails } from './component/ListofPersonalDetails';
import { Create_PersonalDetails } from "./component/CreatePersonalDetails";
import { Personal_Details } from "./component/PersonalDetails"
import {EditPersonalDetails} from "./component/EditPersonalDetails";
import {InventoryPage} from "./component/Accounting";
import {  Create} from "./component/CreateSystemDetail";
import './App.css'
import { from } from '@apollo/client';
function App() {
  return (

    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/list" component={ListOfEmployee} />
        <Route exact path="/adding" component={CreateEmployee} />
        <Route exact path="/edit/:id/" component={EditEmployee} />
        <Route exact path="/display/:id/" component={EmployeeDetails} />
        <Route exact path="/hr" component={HR} />
        <Route exact path="/personal" component={PersonalDetails} />
        <Route exact path="/createpresonal" component={Create_PersonalDetails} />
        <Route exact path="/pd/:id/" component={Personal_Details} />
        <Route exact path="/editpersonal/:id" component={EditPersonalDetails}/>
        <Route exact path="/inventorypage" component={InventoryPage}/>
        <Route exact path="/create" component={Create}/>
      </Switch>
    </Router>
  );
}

export default App;