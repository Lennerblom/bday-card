import React, { Component } from 'react';

const cardMsg = ['Teresa, it\'s your birthday, I think that you\'re pretty great;',
'You were born in 1971, that makes you 48!!!',
'Growing up you\'ve always been so creative and so nice;',
'I remember eating dinner and you always drank milk with ice.',
'I hope your day is filled with much laughter, cheer and gladness;',
'I don’t hope you day is filled with crying, despair and sadness.',
'The weather round here is a little bit cooler with puffy clouds, blue sky and sun;',
'I bet you’re enjoying the California heat, relaxing and having lots of fun!',
'This poem I made for my big sister, really what more can I say;',
'I wish you all the best and have a very happy birthday!']

export default class TeresaCard extends Component {
    render() {
        return (
            <div className='App teri'>
                <head>
                <title>Teri's Birthday Card</title>
                </head>
                <h1 className='card-title'>To: Teresa</h1>
                {cardMsg.map(string => <div className='poem'>{string}</div>)}
                <h2 className='card-title'>~Love Mike</h2>
                <img className='flower3' src={require('./assets/flower3.png')} alt='flower' width='200px'/>
            </div>
        );
    }
}