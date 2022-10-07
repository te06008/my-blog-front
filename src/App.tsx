import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Blog from './components/main/blog/Blog';
import Home from './components/main/home/Home';
import Main from './components/main/Main';
import GlobalStyles from './GlobalStyles';
import ScrollToTop from './ScrollToTop';
import theme from './Theme';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme.lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="*" element={<Main />}>
              <Route path="home" element={<Home />} />
              <Route path="blog/:id" element={<Blog />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
