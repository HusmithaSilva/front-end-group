import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Addcomponent from './component/add.component';
import DisplayItems from './component/display.component'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';


class App extends Component{



render() {
    return(
        <Router>
            <Switch>

                <Route path="/add" component={Addcomponent}/>
                <Route path="" component={DisplayItems}/>



            </Switch>

        </Router>

    )
}

}

export default App;
