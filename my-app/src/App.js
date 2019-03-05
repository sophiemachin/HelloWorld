import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';

// import Tooltip from 

const name = 'Tom'



class App extends Component {

	constructor () {
		super()

		this.state = {
			buttonText : 'Hello World'
		}
	}


	changeButtonText = () => {
		this.setState({

		buttonText: 'clicked'})

		console.log('function triggered')
	}

  render() {
    return (
      <div className="App">
      
      
      
      
      
      
      
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          
          
          
          
          
          <h1>
          	This is an h1 sdfsdfsdfsd
          </h1>
          <p>
  
            Edit <code>src/App.js</code> and save to reload.
            
            Hello {name} :) sdfsfsdfsdfsd
          </p>
          
                    
          <p className='redp'>redp</p>
          <p className='bluep'>bluep</p>
          
          
          <Button variant="contained" color="primary" onClick={this.changeButtonText}>
      			{this.state.buttonText}
    		</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          

          <p>p3</p>
		  <p>p3</p>

        </header>
      </div>
    );
  }
}

export default App;



