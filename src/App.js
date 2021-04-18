
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Common/NavBar/NavBar';
import Footer from './components/Common/Footer/Footer';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Management from './components/Common/Management/Management';
import { useLocalStorage } from './components/utility/CustomeState';
import { createContext, useEffect, useState } from 'react';
import { LoginRouter } from './components/utility/LoginRouter';
import { serverURL } from './components/Config/Config';
import AddCart from './components/AddCart/AddCart';

export const TutorContext = createContext();

function App() {

  const [user, setUser] = useLocalStorage('user', {});
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    
    fetch(`${serverURL}product`)
    .then(res=>res.json())
    .then(data=>setCourses(data.product))

  }, [setCourses])


  return (
    <div className="app">
      <section>
        <div className="container-fluid">
          <div className="row">
            <Router>
              <TutorContext.Provider value={{ user, setUser, courses, setCourses, cart, setCart }}>
                <div className="col-md-12">
                  <NavBar />
                </div>
                <Switch>
                  {/* cart added */}
                  <LoginRouter path="/course/:id">
                  <div className="col-md-12">
                      <AddCart/>
                    </div>
                  </LoginRouter>
                  {/* user management */}
                  <LoginRouter path="/manage/:type/:management">
                    <div className="col-md-12">
                      <Management />
                    </div>
                  </LoginRouter>
                  {/* Admin Profile */}
                  <Route path="/profile">
                    <div className="col-md-12">
                      <Profile />
                    </div>

                  </Route>
                  {/* user login */}
                  <Route path="/login">
                    <div className="col-md-12">
                      <Login />
                    </div>
                  </Route>
                  {/* this is the home page */}
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
                <div className="col-md-12">
                  <Footer />
                </div>
              </TutorContext.Provider>
            </Router>
          </div>
        </div>
      </section>
    </div>


  );
}

export default App;
