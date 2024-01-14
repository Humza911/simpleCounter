import './App.css';
import React, {useState, Component} from "react";
import 'tachyons';

//using hooks
// function App() {
  
//   const[value, setValue] = useState(0);  
  
//   return (   
    
//     <div className= 'vh-100 flex flex-column items-center justify-center'>      
//       <button className="pa3 ba b--green bg-lightest-blue" 
//       style={{ display: 'block', marginBottom: '10px' }}      
//       onClick={()=>setValue(value+1)}>
//         I am a button
//         </button>       
//       <h3 className='f4'>The button has been pressed {value} times </h3>
//     </div>    
//   );  
// }

//using state

class App extends Component {
  constructor() {
    super();
    this.state = 
    {
      counter: 0,
    }
  }
  
  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  
  render()
  {
    const value = this.state.counter;
    return (         
      <div className= 'vh-100 flex flex-column items-center justify-center'>      
        <button className="pa3 ba b--green bg-lightest-blue" 
        style={{ display: 'block', marginBottom: '10px' }}      
        onClick={this.incrementCounter}>
          I am a button
          </button>       
        <h3 className='f4'>The button has been pressed {value} times </h3>
      </div>    
    ); 
  }
  

}





export default App;
