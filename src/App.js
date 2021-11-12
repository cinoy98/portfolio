
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Service } from './components/Service';
import { NavBar } from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar/>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
