import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './core/globalStyles';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import ContributionView from './app/views/Contributions/Contribution.view';
import HomeView from './app/views/Home/Home.view';
import ScaleView from './app/views/Scale/Scale.view';
import AboutUsView from './app/views/AboutUs/AboutUs.view';
import { Provider } from 'react-redux';
import store from './core/store';
import NotFoundView from './app/views/NotFound.view';
import UserCreateView from './app/views/Forms/UserCreate.view';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/escalas' element={<ScaleView />} />
          <Route path='/sobre-nos' element={<AboutUsView />} />
          <Route path='/contribuicoes' element={<ContributionView />} />
          <Route path='/adm/user/create' element={<UserCreateView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles></GlobalStyles>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
