import React from 'react';
import './App.css';

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }



function App() {
  return (
    <div className="userinput">
    <div className="header">
      <form>
        <input placeholder="name" />
        {/* <button type="submit"> Add Task </button> */}
      </form>
    
    </div>

    <div  className="box">
    <h2>Username:ahmad</h2>
       <p>i hope i ll be overwritten!</p>
  </div>

  <div  className="box">
    <h2>Username:ahmad</h2>
       <p>i hope i ll be overwritten!</p>
  </div>

  <div  className="box">
    <h2>Username:Max</h2>
       <p>i hope i ll be overwritten!</p>
  </div>
  </div>

 
  );
}

export default App;
