import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import { CssBaseline, Container, Box } from '@mui/material';
import { useTheme } from './context/ThemeContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () => {
  const { theme } = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Header />
      <Container>
        <Box mt={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
