import React, { Component } from 'react';


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

export default class SaraCard extends Component {
    render() {
        return (
            <div className="App">
            <h1 className='card-title'>To: Sara</h1>
            {stringArr.map(string => <div className='poem'>{string}</div>)}
            <h2 className='card-title'>~Love Mike</h2>
            <img className='flower3' src={require('./assets/flower3.png')} alt='flower' width='200px'/>
            </div>
          );
    }
}