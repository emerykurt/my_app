import './App.css';
import React from 'react'
import List from './List'
import Info from './Info'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      completed: {
        0: true,
        1: false,
      }
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <button>Add</button>
        </form>
        <Info items={this.state.items}/>
        <List items={this.state.items} />
      </div> 
    );
  }




  // state = {
  //   items: []
  // }

  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);

  // handleClick = (e) => {
  //   e.preventDefault()
  //   debugger
  //   console.log(this.state)
  // } 

  // render(){


  //   return (
  //   <div className="App">
  //     <h2>Todo List </h2>
  //     <form >
  //       <input type="text" value={this.state.items} placeholder="item" />
  //       <button onClick={this.handleClick} type="submit">Add</button>
  //     </form>
  //     <span>{this.state.items.length} remaining out of {this.state.items.length} task</span>
  //     <ul id="list">
        
  //     </ul>
  //   </div>
  //   )
  // };
}

export default App;
