import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { ClickProvider } from './ClickContext';

import App from './App';
import './styles.css';

import SearchPage from './Components/SearchPage';
import NotificationPage from './Components/NotificationPage';
import SubPage from './Components/SubPage';
import AccountPage from './Components/AccountPage';
import Setting from './Components/Setting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClickProvider>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/notifications' element={<NotificationPage />} />
          <Route path='/subscriptions' element={<SubPage />} />
          <Route path='/account' element={ <AccountPage />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </ClickProvider>
    </BrowserRouter>
  </React.StrictMode>
);

