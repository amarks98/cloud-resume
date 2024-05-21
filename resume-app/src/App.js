import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Extracurriculars from './components/Extracurriculars';
import Software from './components/Software';
import Footer from './components/Footer';

import './index.css';

const App = () => (
  <div className="container">
    <Header />
    <Education />
    <Experience />
    <Extracurriculars />
    <Software />
    <Footer />
  </div>
);

export default App;
