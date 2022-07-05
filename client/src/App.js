import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import MyRoutes from './pages/MyRoutes';

function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route path = "/" element = {<Home />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/login" element = {<Login />} />
        <Route element = {<RequireAuth />}>
          <Route path = "/myRoutes" element = {<MyRoutes />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
