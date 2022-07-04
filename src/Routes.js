import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

const Routes = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default Routes