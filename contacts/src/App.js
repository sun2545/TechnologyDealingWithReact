import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class App extends Component {

  render() {
    return (
      <div>
      <ScrollBox ref={(ref) => this.scrollBox=ref}/>
      <button onClick={()=> this.scrollBox.scrollToBottom()}> buttom </button>
      <button onClick={()=> this.scrollBox.scrollToTop()}> Top </button>          
      <IterationSample/> 
      </div>  
         
    );
  }
}

export default App;
