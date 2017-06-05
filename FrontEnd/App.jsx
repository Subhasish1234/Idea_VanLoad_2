import React from 'react';
import './App.css';
import {Form, FormControl, FormGroup, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends React.Component {
   render() {
      return (
          <div className='body'>
	<div className='wrapper'>
		<form action="" method="post" name="Login_Form" className='form-signin'>       
		    <h3 className='form-signin-heading'>Please Sign In</h3>
            <div className='.colorgraph'></div> 
			  <input type='text' className='form-control' name="Username" placeholder="Username" required="" autofocus="" />
			  <input type="password" className='form-control' name="Password" placeholder="Password" required=""/>     		  
			 
			  <button className='btn btn-lg btn-primary btn-block'  name="Submit" value="Login" type="Submit">Login</button>  		
              
		</form>			
	</div>
              </div>
      );
   }
}

export default App;