import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { isOsLightThemeAtom } from './atoms/ThemeAtom';
import ScrollToTop from './ScrollToTop';
import Home from './components/main/home/Home';
import Main from './components/main/Main';
import GlobalStyles from './GlobalStyles';
import useScrollToggle from './hooks/useScrollToggle';
import theme from './Theme';
import loadable from '@loadable/component';

const AboutMe = loadable(() => import('./components/main/about/AboutMe'));
const Blog = loadable(() => import('./components/main/blog/Blog'));
const Modify = loadable(() => import('./components/main/Modify/Modify'));
const Write = loadable(() => import('./components/main/write/Write'));
const Preview = loadable(() => import('./components/main/preview/Preview'));
const Login = loadable(() => import('./components/auth/Login'));

function App() {
  const isLightTheme = useRecoilValue(isOsLightThemeAtom);
  useScrollToggle();
  return (
    <HelmetProvider>
      <ThemeProvider theme={isLightTheme ? theme.lightTheme : theme.darkTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Main />}>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="blog/:id" element={<Blog isPreview={false} />} />
              <Route path="blog/:id/modify" element={<Modify />} />
              <Route path="write" element={<Write isModify={false} />} />
              <Route path="preview" element={<Preview />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
