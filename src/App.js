import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Profile from "./Profile/Profile.js"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
state ={
show: false,


};

toggleShow = () => {
  this.setState({ show: !this.state.show });
};
  render() { 
    return ( 
      <div className='App'>
        <Button variant='secondary' onClick={this.toggleShow}>
          Show Person
        </Button>
        {this.state.show && <Profile />}
      </div>
     );
  }
}
 

export default App;
