import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import MyCourse from "./Pages/MyCourses/MyCourse";
import SignOut from "./Pages/Logout/Signout";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/my-course" element={<MyCourse></MyCourse>}></Route>
        <Route path="/sign-out" element={<SignOut></SignOut>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
