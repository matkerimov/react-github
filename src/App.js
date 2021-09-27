import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Dashboard from "./view/Dashboard";
import Home from "./view/Home";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <Router>
          <Route exact path="/"><Dashboard /></Route>

                <Route exact path="/:username"><Home /></Route>
                <Route exact path="/:username/:repos"><Home /></Route>


        </Router>
    );
};

export default App;