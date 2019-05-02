import React from 'react';
import logo from './logo.svg';
import './App.css';


const stringArr = ['Today is your Birthday,  I’m glad you’re my wife;',
  'Forty years ago today, you breathed your first breath of life.',
  'I hope your day is happy, I hope your day is glad;',
  'I don’t hope your day is angry, frustrated, or sad.',
  'You’re pretty great in all the things you do;',
  'Everyone who knows you is better off because of you.',
  'You touch so many in one way or another;',
  'Categories include: family, children, school and other.',
  'I love you a lot, what more can I say;',
  'You\'re my Honey Bunny, have a happy Birthday!',]
function App() {
  return (
    <div className="App">
    <h1 className='card-title'>To: Sara</h1>
    {stringArr.map(string => <div className='poem'>{string}</div>)}
    </div>
  );
}

export default App;
