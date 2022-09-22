import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { lightTheme } from './components/Theme';

import GlobalStyle from './globalStyles';

import Main from './components/Main';

import About from './components/AboutPage';

import WorkPage from './components/WorkPage';

import Stacks from './components/Stacks';

import BlogPage from './components/BlogPage';

import { AnimatePresence } from 'framer-motion';

import SoundBar from './reuseables/SoundBar';

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        {/* For framer-motion animation on page change */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/stacks" component={Stacks} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/blog" component={BlogPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
