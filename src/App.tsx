import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from 'components/organisms/navbar/Navbar';
import ProjectStatusPage from 'pages/ProjectStatusPage/ProjectStatusPage';

import './App.css';

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

function Admin() {
  return <h2 className="text-black text-3xl pl-10 pt-20">Admin Content</h2>;
}

export const Header = () => {
  return (
    <div
      className="flex justify-between text-xl text-white bg-gray-800 p-2 items-center fixed z-10 w-full top-0"
      style={{ width: 'inherit' }}
    >
      <span className="pl-4 text-2xl text-white">Project Status</span>
      <div>
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
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <div className="w-full">
          <Header />

          <Navbar navItems={[]} textColor={'white'} />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <ProjectStatusPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
