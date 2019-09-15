import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {

    persons: [
      {
        id: "ewqe3",
        name: "N/A",
        hobby: "N/A"
      }, {
        id: "34wef",
        name: "N/A",
        hobby: "N/A"
      }, {
        id: "wef23",
        name: "N/A",
        hobby: "N/A"
      }
    ]

  };

  startHandler = () => {

    this.setState({

      persons: [
        {
          id: "ewqe3",
          name: "Amr",
          hobby: "N/A"
        }, {
          id: "34wef",
          name: "Omar",
          hobby: "N/A"
        }, {
          id: "wef23",
          name: "Khaled",
          hobby: "N/A"
        }
      ]
    });

  }

  keyHandler = (event) => {

    this.setState({

      persons: [
        {
          id: "ewqe3",
          name: event.target.value,
          hobby: "N/A"
        }, {
          id: "34wef",
          name: "Omar",
          hobby: "N/A"
        }, {
          id: "wef23",
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
      <Person change={this.keyHandler} name={this.state.persons[0].name} hobby={this.state.persons[0].hobby}/>
      <Person name={this.state.persons[1].name} hobby={this.state.persons[1].hobby}/>
      <Person name={this.state.persons[2].name} hobby={this.state.persons[2].hobby}/>
    </div>);
  }

}

export default App;
