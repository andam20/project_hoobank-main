import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Accountant from './Accountant';
import AddExpense from './AddExpense';
import Account from './Account';
import Expense from './Expense';
import Login from './Login';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          Component={App}
          key={Math.random()}
         />
         <Route
         path='/accountant'
         Component={Accountant}
         key={Math.random()}
          />
          <Route
         path='/addExpense'
         Component={AddExpense}
         key={Math.random()}
          />
          <Route
         path='/account'
         Component={Account}
         key={Math.random()}
          />
          <Route
         path='/Expense'
         Component={Expense}
         key={Math.random()}
          />
          <Route
         path='/Login'
         Component={Login}
         key={Math.random()}
          />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
