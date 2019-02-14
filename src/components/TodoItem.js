import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: 'lightblue',
      padding: '10px',
      borderBottom: '1px #fff dotted',
      textDecoration:this.props.todo.completed ? 'line-through':'none'
    }
  }
  render() {
    return (
        <div style={this.getStyle()}>
          <p>
          <input type='checkbox' />{' '}
          {this.props.todo.title}
          </p>
        </div>
    )
  }
}

//PropTypes
TodoItem.propType = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
