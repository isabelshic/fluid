import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Survey from './components/Survey';

import Home from './pages/Home';

import WeatherForecasts from './pages/weather-forecasts/WeatherForecasts';
import WeatherMaps_Weather from './pages/weather-forecasts/WeatherMaps_Weather';
import ObservingSystemStatistics_Weather from './pages/weather-forecasts/ObservingSystemStatistics_Weather';
import RadianceMonitoring_Weather from './pages/weather-forecasts/RadianceMonitoring_Weather';
import Datagrams_Weather from './pages/weather-forecasts/Datagrams_Weather';

import SeasonalPrediction from './pages/seasonal-prediction/SeasonalPrediction';
import Datagrams_Seasonal from './pages/seasonal-prediction/Datagrams_Seasonal';
import SurfaceConcentrations_Seasonal from './pages/seasonal-prediction/SurfaceConcentrations_Seasonal';
import TotalColumns_Seasonal from './pages/seasonal-prediction/TotalColumns_Seasonal';

import Reanalysis from './pages/reanalysis/Reanalysis';
import Anomalies_Reanalysis from './pages/reanalysis/Anomalies_Reanalysis';
import ChemMaps_Reanalysis from './pages/reanalysis/ChemMaps_Reanalysis';
import ClimateStatistics_Reanalysis from './pages/reanalysis/ClimateStatistics_Reanalysis'
import WeatherMaps_Reanalysis from './pages/reanalysis/WeatherMaps_Reanalysis';

import AerosolGas from './pages/aerosol-gas/AerosolGasForecasts';
import Datagrams_AerosolGas from './pages/aerosol-gas/Datagrams_AerosolGas';
import SpatialMaps_AerosolGas from './pages/aerosol-gas/SpatialMaps_AerosolGas';

import MissionSupport from './pages/mission-support/MissionSupport';
import ARCSIX from './pages/mission-support/ARCSIX';
import BLUEFLUX from './pages/mission-support/BLUEFLUX';
import PACEPAX from './pages/mission-support/PACE-PAX';
import SARP from './pages/mission-support/SARP';
import SARPEAST from './pages/mission-support/SARP-EAST';
import SARPWEST from './pages/mission-support/SARP-WEST';
import SCOAPEII from './pages/mission-support/SCOAPE-II';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/weather-forecasts" element={<WeatherForecasts />} />
              <Route path="/weather-forecasts/weather-maps" element={<WeatherMaps_Weather />} />
              <Route path="/weather-forecasts/observing-system-statistics" element={<ObservingSystemStatistics_Weather />} />
              <Route path="/weather-forecasts/radiance-monitoring" element={<RadianceMonitoring_Weather />} />
              <Route path="/weather-forecasts/datagrams" element={<Datagrams_Weather />} />
            <Route path="/seasonal-prediction" element={<SeasonalPrediction />} />
              <Route path="/seasonal-prediction/datagrams" element={<Datagrams_Seasonal />} />
              <Route path="/seasonal-prediction/surface-concentrations" element={<SurfaceConcentrations_Seasonal />} />
              <Route path="/seasonal-prediction/total-columns" element={<TotalColumns_Seasonal />} />
            <Route path="/reanalysis" element={<Reanalysis />} />
              <Route path="/reanalysis/anomalies" element={<Anomalies_Reanalysis />} />
              <Route path="/reanalysis/chem-maps" element={<ChemMaps_Reanalysis />} />
              <Route path="/reanalysis/climate-statistics" element={<ClimateStatistics_Reanalysis />} />
              <Route path="/reanalysis/weather-maps" element={<WeatherMaps_Reanalysis />} />
            <Route path="/aerosol-gas" element={<AerosolGas />} />
              <Route path="/aerosol-gas/datagrams" element={<Datagrams_AerosolGas />} />
              <Route path="/aerosol-gas/spatial-maps" element={<SpatialMaps_AerosolGas />} />
            <Route path="/mission-support" element={<MissionSupport />} />
              <Route path="/mission-support/ARCSIX" element={<ARCSIX />} />
              <Route path="/mission-support/BLUEFLUX" element={<BLUEFLUX />} />
              <Route path="/mission-support/PACE-PAX" element={<PACEPAX />} />
              <Route path="/mission-support/SARP" element={<SARP />} />
              <Route path="/mission-support/SARP-EAST" element={<SARPEAST />} />
              <Route path="/mission-support/SARP-WEST" element={<SARPWEST />} />
              <Route path="/mission-support/SCOAPE-II" element={<SCOAPEII />} />

        </Routes>
        <Survey />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
