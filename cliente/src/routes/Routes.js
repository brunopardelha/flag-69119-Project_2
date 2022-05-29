import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Dashboard from "../components/dashboard/dashboard";
import Addbyuser from "../components/addbyuser/addbyuser";
import Profile from "../components/profile/profile";
import Notfound from "../components/notfound/notfound";
import Logout from "../components/logout/logout";
import { AuthProvider } from "../components/auth";

function Router() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add" element={<Addbyuser />} />
        <Route path="profile" element={<Profile />} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </AuthProvider>
  )
}

export default Router;