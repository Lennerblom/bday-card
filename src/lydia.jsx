import React from 'react';
import LinkedList from './link_list';

const letter = 'I\'m sorry that I hurt you; that’s not how a father should be;I wish I could take it all back; but it’s too late obviously;I hope we can restore; the relationship that we had;going out for driving practice; just a daughter and her dad;I’m sorry it’s taken so long; for me to apologize for real;Maybe its time we take a drive; to enjoy a SOFT hot meal'
let arr = letter.split(';');
let current = '';
let myList = new LinkedList();
class Lydia extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    view: true
  }
}
  componentDidMount(){
    arr.map(line => myList.append(line));
    current = myList.head.value;
    this.forceUpdate();
}
  nextLine = () => {
    if(myList.head.next === null){
      current = arr.map(line => <div className='lydia-letter'>{line}</div>);
      this.forceUpdate();
    }
    else {
      myList.head = myList.head.next;
      current = myList.head.value;
      this.forceUpdate();

    }
  }
  render() {
    return(
  
    <div className="App lydia">
      <head>
        <title>Lydia's Letter</title>
      </head>
        <h1 className='lydia-letter'>To: Lydia</h1>
        <div className='lydia-letter'>         
            {current}
        </div>
        <button onClick={this.nextLine}>next</button>
    </div>
  )
}
}
export default Lydia;