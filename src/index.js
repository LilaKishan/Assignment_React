import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import CRUD from './components/CRUD';
import AddTeam from './components/AddTeam';
import TeamDetail from './components/TeamDetail';
import EditTeamDetail from './components/EditTeamDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/CRUD" element={<CRUD />}/>
          <Route path="/CRUD/AddTeam" element={<AddTeam />} />
          <Route path="/CRUD/edit/:id" element={< EditTeamDetail/>} />
          <Route path="/CRUD/:id" element={<TeamDetail />} />
        </Route>
    </Routes>
  </BrowserRouter>
);  


