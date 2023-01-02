import { BrowserRouter, Switch, Route } from 'react-router-dom'

//components
import Navbar from './components/Navbar'

//page components
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
          <Route exact path='/' element={<Home />}>
            <Home />
          </Route>
          <Route path='/about' element={<About />}>
            <About />
          </Route>
          <Route path='/login' element={<Login />}>
            <Login />
          </Route>
          <Route path='/projects/:id' element={<Project />}>
            <Project />
          </Route>
          <Route path='/contact' element={<Contact />}>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
