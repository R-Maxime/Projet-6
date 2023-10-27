import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { Navigate, BrowserRouter as Rooter, Route, Routes } from 'react-router-dom';
import './styles/main.scss'
import Header from './components/Header';
import Footer from "./components/Footer"
import About from './pages/About';
import Housings from './pages/Housings';
import NotFound from './pages/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rooter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="housing/:id" element={<Housings />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
      <Footer />
    </Rooter>
  </React.StrictMode>,
)