import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import AWS from 'aws-sdk';

import AllTweetPage from './pages/AllTweetsPage/index.js';

import AllUserPage from './pages/AllUserPage';
import LoadingRedirect from './pages/LoadingRedirect';

import LoginPage from './pages/LoginPage';

import RegistrationPage from './pages/RegistrationPage';

import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router';
import ForgotPassword from './pages/ForgotPassword';
import SearchUserResultPage from './pages/SearchUserResultPage';
import ProfilePicUpload from './components/ProfilePicUpload';

import {setUserDetails} from './components/LoginForm/action';

// AWS.config.update(
//   {accessKeyId: "AKIASLF2PPPDDHLEW3UB",
//     secretAccessKey: "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",
//     region: 'us-east-1'
//   });

// const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

// const queueUrl = 'https://sqs.us-east-1.amazonaws.com/161452358598/springboot-queue';

// let params = {
//   MaxNumberOfMessages: 10,
//   MessageAttributeNames: ['All'],
//   QueueUrl: queueUrl,
// };

// sqs.receiveMessage(params, function(err, data) {
//   console.log(data);
//   if (err) {
//     console.log("Error ", err);
//   }
//   else if (data.Messages) {
//     data.Messages.forEach(msg => {console.log(msg)});
//   }
// })

function selector(state) {
  return state.loginReducer;
}



function App() {

  let state = useSelector(selector);
   const dispatch = useDispatch();

  let isUserLoggedIn = state.isUserLoggedIn || localStorage.getItem('isUserLoggedIn') || false;

  React.useEffect(()=>{
    console.log(localStorage.getItem("isUserLoggedIn"), " ===", state.isUserLoggedIn)
    if (localStorage.getItem("isUserLoggedIn")&& !state.isUserLoggedIn) {
      console.log("empty redux")
     dispatch(setUserDetails());

    }
  },[state]);
  

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
        <Route path="/auth/forgot" element={<ForgotPassword />} />

        {isUserLoggedIn && 
          <React.Fragment>
            <Route path="/home" element={<AllTweetPage />}></Route>

            <Route path="/tweets" element={<AllTweetPage />}/>
            <Route path="/users" element={<AllUserPage />}/>
            <Route path="/search" element={<SearchUserResultPage />} />
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
