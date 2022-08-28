import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './views/Home/Home.view';
import Scale from './views/Scale/Scale.view';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/escalas' element={<Scale />} />
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
