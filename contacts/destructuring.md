#### destructuring assignment
scrollToBottom =()=>{ <br>
        const { scrollHeight, ClientHeight} = this.box; <br>
      } <br><br>
      
##### the same
const scrollHeight = this.box.scrollHeight; <br>
const clientHeight = this.box.clientHeight; <br>

--------------------------------------------------------<br>
      
#### for example
render(){ <br>
     return( <br>
      <div> <br>
        <div>{this.props.name}</div><br>
        <div>{this.props.number}</div><br>
      </div><br>
     )<br>
    }<br>
        
##### the same
render(){ <br>
     const {name, number } = this.props;<br>
     return( <br>
      <div> <br>
        <div>{name}</div><br>
        <div>{number}</div><br>
      </div><br>
     )<br>
    }<br>
     
