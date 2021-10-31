import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProfilePage from './Pages/ProfilePage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact> <HomePage/></Route>
        <Route path="/profile/:id" exact> <ProfilePage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
