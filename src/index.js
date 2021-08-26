import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/* Pages */
import Home from './pages/home';
import ShoppingCart from './pages/shoppingCart';
import Contact from './pages/contact';
import About from './pages/about';

/* material-ui */
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#53D33F', 
      main: '#14A800',
      dark: '#138900'
      
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
