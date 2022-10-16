import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './core/globalStyles';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import ContributionView from './app/views/Contributions/Contribution.view';
import HomeView from './app/views/Home/Home.view';
import Scale from './app/views/Scale/Scale.view';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/escalas' element={ <Scale /> } />
          <Route path='/contribuicoes' element={<ContributionView />} />
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
    </BrowserRouter>
    <GlobalStyles></GlobalStyles>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
