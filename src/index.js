import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerDetail from './components/player/PlayerDetail';
import PlayersList from './components/player/PlayersList';
import store from './redux/configureStore';
import './index.css';
import Navbar from './components/routes/Navbar';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <div className="flex flex-col justify-between gap-0 h-screen">
          <Navbar />
          <section className="min-w-full">
            <Routes>
              <Route path="/" element={<PlayersList />} />
              <Route path="/player/:id" element={<PlayerDetail />} />
            </Routes>
          </section>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  </Provider>,
);
