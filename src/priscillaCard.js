import React, { Component } from 'react';

const cardMsg = ['You\'re birthday is coming soon, we thought you’d enjoy some tea;',
   'So let’s get together, have our pinkies up and celebrate as a family.', 
    'You were born in 1952, that makes you 67;',
    'That just means you\'re a step closer to heaven.',
    'You knit and crochet, that is part of who you are;']

export default class PriscillaCard extends Component {
    render() {
        return (
            <div className='App priscilla'>
                <head>
                <title>Priscilla's Birthday Card</title>
                </head>
                <h1 className='card-title-cilla'>To: Priscilla</h1>
                {cardMsg.map(string => <div className='poem-cilla'>{string}</div>)}
                <h2 className='card-title-cilla'>~Love Mike</h2>
                <img className='flower3' src={require('./assets/flower3.png')} alt='flower' width='200px'/>
            </div>
        );
    }
}