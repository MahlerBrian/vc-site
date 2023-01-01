import { BrowserRouter, Switch, Route } from 'react-router-dom'

//page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/AboutUs'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import Project from './pages/projects/Project'
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/about'>
            <About />
          </Route>
          <Route  path='/login'>
            <Login />
          </Route>
          <Route  path='/projects/:id'>
            <Project />
          </Route>
          <Route  path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
