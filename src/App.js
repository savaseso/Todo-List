import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header'
import Addtodo from './components/Addtodo';
import About from './components/pages/About';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

   componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }
  //Toggle complete
markComplete = (id)=> {
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id===id){
      todo.completed = !todo.completed
    }
    return todo;
  })});
}

//delete Todo

delTodo=(id) => {
this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
}

addTodo = (title) => {
  let id = Date.now()
  const newTodo = {
    id:id,
    title:title,
    completed:false
  }
  
  if(!title){
    return
  }else{
  this.setState({ todos: [...this.state.todos, newTodo]
  })}
}

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path='/' exact render={props=>(
              <React.Fragment>
                <Addtodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
