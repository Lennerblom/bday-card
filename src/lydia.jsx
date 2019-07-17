import React from 'react';

const letter = 'I\'m sorry that I hurt you, that’s not how fathers should be;I wish I could take it all back, but it’s too late obviously;I hope we can restore the relationship that we had;going out for driving practice, just a daughter and her dad;I know this past week has been pretty hard for you especially; Maybe it’s time we drive up highway 99 to eat at Philly-Yo-Belly.';

let arr = letter.split(';')

const Lydia = () => (

    <div className="App lydia">
      <head>
        <title>Lydia's Letter</title>
      </head>
        <h1 className='card-title'>To: Lydia</h1>
{arr.map(line => <div className='poem'>{line}</div>)}
    </div>
)
export default Lydia;