import { Route, Routes } from 'react-router-dom';
import AddTweet from './components/AddTweet';
import Header from './components/Header';

import AllTweetPage from './pages/AllTweetsPage/index.js';

import AllUserPage from './pages/AllUserPage';
import LoadingRedirect from './pages/LoadingRedirect';

import LoginPage from './pages/LoginPage';

import RegistrationPage from './pages/RegistrationPage';

function App() {
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

        <Route path="/users" element={<AllUserPage />}/>
        <Route path="/tweets" element={<AllTweetPage />}/>
      </Routes>
      <AddTweet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
