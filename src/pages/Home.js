import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DiceBags from "./DiceBags";
// import {About, AboutOG } from './About'
import About, { AboutOG } from './About'
import Topics from './Topics'
import Todos from '../todos'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/aboutog">About OG</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/dice">Dice Bags</Link>
        </li>
        <li>
          <Link to="/todos">Todo List</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/aboutog" component={AboutOG} />
      <Route path="/topics" component={Topics} />
      <Route path="/dice" component={DiceBags} />
      <Route path="/todos" component={Todos} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

export default BasicExample;
