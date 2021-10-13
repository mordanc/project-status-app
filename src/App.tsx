import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'components/organisms/navbar/Navbar';
import { Header } from 'components/organisms/header/Header';
import ProjectStatusPage from 'pages/ProjectStatusPage/ProjectStatusPage';
import CreateProjectPage from 'pages/CreateProjectPage/CreateProjectPage';

import './App.css';

function Admin() {
  return <h2 className="text-black text-3xl pl-10 pt-20">Admin Content</h2>;
}

function App() {
  return (
    <div>
      <Router>
        <div className="w-full flex">
          <Header />

          <div className="w-1/5">
            <Navbar navItems={[]} textColor={'white'} />
          </div>
          <div className="w-4/5">
            <Switch>
              <Route path="/admin" component={Admin} />
              <Route path="/createProject" component={CreateProjectPage} />
              <Route path="/" component={ProjectStatusPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
