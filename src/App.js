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
import {AccountingPage} from "./component/Accounting";
import { CreateSystem } from "./component/CreateSystemDetail";
import {ListofInventory  } from "./component/ListofInventory";
import {EditSystem  } from "./component/EditSystemdetails";
import{SystemDetails} from "./component/SystemDetails"
import './App.css'

function App() {
  return (

    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/list" component={ListOfEmployee} />
        <Route exact path="/adding" component={CreateEmployee} />
        <Route exact path="/edit/:code/" component={EditEmployee} />
        <Route exact path="/display/:code/" component={EmployeeDetails} />
        <Route exact path="/hr" component={HR} />
        <Route exact path="/personal" component={PersonalDetails} />
        <Route exact path="/createpresonal" component={Create_PersonalDetails} />
        <Route exact path="/pd/:code/" component={Personal_Details} />
        <Route exact path="/editpersonal/:code" component={EditPersonalDetails}/>
        <Route exact path="/ss" component={AccountingPage}/>
        <Route exact path="/cc" component={CreateSystem}/>
        <Route exact path="/inv" component={ListofInventory}/>
        <Route exact path="/eedit/:code/" component={EditSystem}/>
       
        <Route exact path="/read/:code/" component={SystemDetails}/>

        
      </Switch>
    </Router>
  );
}

export default App;