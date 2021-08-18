import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Counter } from './features/counter/Counter';

import './App.css';
import logo from './logo.svg';
import ProjectStatus from './components/templates/ProjectStatus/ProjectStatus';

export const Home = () => <ProjectStatus navTextColor="white" />;
// 109	183	228
function About() {
  return (
    <div>
      <div className="mt-12">one</div>
      <div>two</div>
      <button className="bg-blue-400 hover:opacity-70 border-black px-2 rounded transition">
        button
      </button>
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <div>
      <Router>
        <div className="p-2" style={{ width: '98%' }}>
          <div
            className="flex justify-end text-xl text-white bg-gray-700 rounded p-2 fixed "
            style={{ width: 'inherit' }}
            // style={{ width: '98%' }}
          >
            <Link to="/home">
              <button className="transform transition hover:scale-105 hover:text-blue-300 mx-2">
                Home
              </button>
            </Link>
            <Link to="/about">
              <button className="transform transition hover:scale-105 hover:text-blue-300 mx-2">
                About
              </button>
            </Link>
            <Link to="/admin">
              <button className="transform transition hover:scale-105 hover:text-blue-300 mx-2">
                Admin
              </button>
            </Link>
          </div>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
