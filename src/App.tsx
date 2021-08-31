import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'components/organisms/navbar/Navbar';
import { Header } from 'components/organisms/header/Header';
import ProjectStatusPage from 'pages/ProjectStatusPage/ProjectStatusPage';
import CreateProjectPage from 'pages/CreateProjectPage/CreateProjectPage';

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
              <Route path="/about" component={About} />
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
// function App() {
//   return (
//     <div className="w-screen h-screen">
//       <div className="h-16">Header</div>
//       <div className="flex flex-col w-1/12 bg-gray-700 h-full">sidebar</div>
//     </div>
//   );
// }

export default App;
