import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
