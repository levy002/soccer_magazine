import { Routes, Route } from 'react-router-dom';
import PlayerDetail from './components/player/PlayerDetail';
import PlayersList from './components/player/PlayersList';

const App = () => (
  <Routes>
    <Route path="/" element={<PlayersList />} />
    <Route path="/player/:id" element={<PlayerDetail />} />
  </Routes>
);

export default App;
