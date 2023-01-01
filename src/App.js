import { BrowserRouter, Switch, Route } from 'react-router-dom'

//page components
import Home from './pages/home/Home'
import About from './pages/about/AboutUs'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import Projects from './pages/projects/OurProjects'


//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
