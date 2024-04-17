import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrainingLog from './pages/TrainingLog';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<TrainingLog />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
