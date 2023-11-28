import "./App.css";
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

import {MainPage} from './pages/MainPage'
import {AboutPage} from './pages/AboutPage'
import {MissionPage} from './pages/MissionPage'
import {LeadershipPage} from './pages/LeadershipPage'
import {PrivateclientsPage} from './pages/PrivateclientsPage'
import {CorporationsPage} from './pages/CorporationsPage'
import {NotfoundPage} from './pages/NotfoundPage'

import { Layout } from "./components/Layout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(fakeLoading);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bannerBack">
          <div className="bannerImg"></div>
        </div>
      ) : (
        // Контент приложения, отображается после загрузки
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/clients" element={<PrivateclientsPage />} />
            <Route path="/corporations" element={<CorporationsPage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
