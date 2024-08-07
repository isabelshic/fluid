import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Survey from './components/Survey';

import Home from './pages/Home';
import WeatherMaps from './pages/WeatherMaps';
import WeatherForecasts from './pages/WeatherForecasts';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather-forecasts" element={<WeatherForecasts />} />
          <Route path="/weather-forecasts/weather-maps" element={<WeatherMaps />} />
        </Routes>
        <Survey />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
