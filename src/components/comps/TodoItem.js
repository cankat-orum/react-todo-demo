import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    // styling function for to-do items
    getStyle = () => {
        return {
            background: '#e4defc',
            padding: '10px',
            borderBottom: '2px #ccc solid',
            // dynamically changes the styling
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }



    render() {
        return (
            <div style={this.getStyle()}>
                {/* displays todo prop's title */}
                <p>
                    <input type="checkbox" onChange={this.props.markComplete} /> {' '}
                    {this.props.todo.title}
                </p>
            </div>
        )
    }
}

// indicates that todo prop should have an object
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// styling through variable
/* const itemStyle = {
    backgroundColor: '#f4f4f4'
} */

export default TodoItem
