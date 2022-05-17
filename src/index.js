import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
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
            <App />
          </section>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  </Provider>,
);
