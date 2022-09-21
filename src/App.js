import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { lightTheme} from './components/Theme';

import GlobalStyle from './globalStyles';

import Main from './components/Main';

import About from './components/AboutPage';

import WorkPage from './components/WorkPage';

import Stacks from './components/Stacks';

import BlogPage from './components/BlogPage';

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/stacks" component={Stacks} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/blog" component={BlogPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
