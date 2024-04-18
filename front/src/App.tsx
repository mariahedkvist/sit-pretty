import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { CssBaseline } from '@mui/material';
import Create from './pages/Create';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
};
export default App;
