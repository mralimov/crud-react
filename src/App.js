import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
import { Router, Switch, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/addUser'>
        <AddUser />
      </Route>
      <Route exact path='/editUser:id'>
        <EditUser />
      </Route>
      {/* <Route path='*'>
        <h1>Page Not Fount</h1>
      </Route> */}
    </div>
  );
}

export default App;
