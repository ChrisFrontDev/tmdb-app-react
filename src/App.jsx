import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import 'swiper/swiper-bundle.css';

import 'styles/global.css';
import Navbar from 'components/Navbar';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes />
    </Router>
  </>
);

export default App;
