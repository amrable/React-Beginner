import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {

    persons: [
      {
        name: "N/A",
        hobby: "N/A"
      }, {
        name: "N/A",
        hobby: "N/A"
      }, {
        name: "N/A",
        hobby: "N/A"
      }
    ]

  };

  startHandler = () => {

    this.setState({

      persons: [
        {
          name: "Amr",
          hobby: "N/A"
        }, {
          name: "Omar",
          hobby: "N/A"
        }, {
          name: "Khaled",
          hobby: "N/A"
        }
      ]
    });

  }

  render() {
    return (<div className="App">
      <h1>It is a React.js Page</h1>
      <button onClick={this.startHandler}>
        Start
      </button>
      <Person name={this.state.persons[0].name} hobby={this.state.persons[0].hobby}/>
      <Person name={this.state.persons[1].name} hobby={this.state.persons[1].hobby}/>
      <Person name={this.state.persons[2].name} hobby={this.state.persons[2].hobby}/>
    </div>);
  }

}

export default App;
