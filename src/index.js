import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Booking from './Booking'
import BookingCompleted from './BookingCompleted'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/booking" component={Booking}/>
      <Route exact path="/bookingCompleted" component={BookingCompleted}/>
    </Switch> 
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
