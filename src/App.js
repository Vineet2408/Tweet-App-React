import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTweet from './components/AddTweet';
import Header from './components/Header';

import AllTweetPage from './pages/AllTweetsPage/index.js';

import AllUserPage from './pages/AllUserPage';
import LoadingRedirect from './pages/LoadingRedirect';

import LoginPage from './pages/LoginPage';

import RegistrationPage from './pages/RegistrationPage';

import { useSelector } from 'react-redux';
import { redirectUser } from './services/loginService';

import { useNavigate } from 'react-router';

function App() {

  let item = localStorage.getItem('isUserLoggedIn');

  const state = useSelector(state => state.loginReducer);

  if (!state || !state.isUserLoggedIn) {
    localStorage.removeItem('isUserLoggedIn');
    item = false;
  }

  const isUserLoggedIn = item && state.isUserLoggedIn;
  if (isUserLoggedIn === undefined) {
    isUserLoggedIn = false;
  }

  const navigate = useNavigate();


  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
      
      <Routes>
        <Route path="/" element={<LoadingRedirect />} />
        <Route path="/auth/login" element={<LoginPage />}/>
        <Route path="/auth/register" element={<RegistrationPage />}/>

        {isUserLoggedIn && 
          <React.Fragment>
            <Route path="/home" element={<AllTweetPage />}></Route>

            <Route path="/tweets" element={<AllTweetPage />}/>
            <Route path="/users" element={<AllUserPage />}/>
          </React.Fragment>
        }
        {
          !isUserLoggedIn && (
            <React.Fragment>
              <Route path="/*" element={<LoginPage />}/>
            </React.Fragment>
          )
        }
      </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
