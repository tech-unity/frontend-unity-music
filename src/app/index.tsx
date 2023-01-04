import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import info from '../core/utils/info';
import AboutUsView from './views/AboutUs/AboutUs.view';
import ContributionView from './views/Contributions/Contribution.view';
import InstrumentCreateView from './views/Forms/InstrumentCreate.view';
import PersonCreateView from './views/Forms/PersonCreate.view';
import HomeView from './views/Home/Home.view';
import NotFoundView from './views/NotFound.view';
import ScaleView from './views/Scale/Scale.view';

export default function App() {
  useEffect(() => {
    window.onunhandledrejection = function (error) {
      console.log(error);
      info({
        title: error.reason.response?.data.title || 'Erro',
        description: error.reason.response?.data.detail || error.reason.message,
      });
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/escalas' element={<ScaleView />} />
        <Route path='/sobre-nos' element={<AboutUsView />} />
        <Route path='/contribuicoes' element={<ContributionView />} />
        <Route path='/adm/person/create' element={<PersonCreateView />} />
        <Route path='/adm/instrument/create' element={<InstrumentCreateView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}
