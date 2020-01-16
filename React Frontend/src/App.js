import React, { Component } from 'react';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'

import Cards from './components/Cards'
import Registration from './components/Registration'
import Information from './components/Information'

class App extends Component {
    render(){
        return(
            <React.Fragment>
                <Cards></Cards>
            </React.Fragment>
        )
    }
    
}

export default App;