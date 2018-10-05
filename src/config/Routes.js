import React, {Component, Fragment} from 'react'
import { Route } from "react-router-dom";
import About, { AboutOG } from "../pages/About";
import DiceBags from "../pages/DiceBags";
import Topics from "../pages/Topics";
import Todos from "../todos";

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/aboutog" component={AboutOG} />
                <Route path="/topics" component={Topics} />
                <Route path="/dice" component={DiceBags} />
                <Route path="/todos" component={Todos} />
            </Fragment>
        )
    }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);