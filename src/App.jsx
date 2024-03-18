import React from 'react';

import Contact from './pages/contact/Contact';
import Pines from './pages/pines/Pines';
import Medallas from './pages/medallas/Medallas';
import Joyeria from './pages/joyeria/Joyeria';
import InsigniasMilitares from './pages/InsigniasMilitares/InsigniasMilitares';
import Placas from './pages/placas/Placas';
import {Home} from './pages/home/Home';
import {NotFound} from './pages/NotFound';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

function App() {
  
    return (
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/placas" component={<Placas />} />
        <Route path="/insignias-militares" component={<InsigniasMilitares />} />
        <Route path="/joyeria" component={<Joyeria />} />
        <Route path="/medallas" component={<Medallas />} />
        <Route path="/pines" component={<Pines />} />
        <Route path="/contactos" component={<Contact />} />
        <Route component={<NotFound />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;