import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import styles from './App.css';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

console.log(styles);

function getRandomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {
  state={
    color:'#000000'
  }

  handleClick=()=>{
    this.setState({
      color:getRandomColor()
    });
  }
  render() {
    return (
      <div>
      <ScrollBox ref={(ref) => this.scrollBox=ref}/>
      <button onClick={()=> this.scrollBox.scrollToBottom()}> buttom </button>
      <button onClick={()=> this.scrollBox.scrollToTop()}> Top </button>
                
      <IterationSample/> 
      <button onClick={this.handleClick}> random color </button>
      <LifeCycleSample color={this.state.color}/>
      <div className={[styles.box, styles.blue].join(' ')}></div>
      </div>  
         
    );
  }
}

export default App;
