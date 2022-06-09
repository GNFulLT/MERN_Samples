import React from 'react'
import {Routes,Route,NavLink,Link,Router} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css"

import Movie from "./components/Movie";
import AddReview from './components/AddReview';
import Login from './components/Login';
import MovieList from './components/MovieList';

import { useState } from 'react';

const App = () => {

  let [user,setUser] = useState(null);

  const loginUser = async (user = null) =>
  {
    setUser(user);
  }

  const logoutUser = async () =>
  {
    setUser(null);
  }

  return (
    <div>
    <Navbar variant="dark" bg="primary" expand="lg">
      <Navbar.Brand>Movie Reviews</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
      {user ? (
      <Nav.Link onClick={logoutUser}>Logout User</Nav.Link>
      ) : (
  <Nav.Link as={Link} to="/login">Login</Nav.Link>
  )}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
        
<Routes>

<Route path={"/"} element={<MovieList/>}/>
<Route path={"/movies"} element={<MovieList/>}/>
<Route path="/movies/:id/review"  element={<AddReview user={user}></AddReview>}/>
<Route path="/movies/:id/" element={<Movie user={user}/>}/>
<Route path="/login" element={<Login login={loginUser}></Login>}/>

</Routes>
    
</div>

  )
}

export default App