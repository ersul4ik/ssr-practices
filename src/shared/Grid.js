import React, { Component } from 'react'

class Grid extends Component {
    render() {
        const repos = this.props.data

        return (
            <ul>
                {repos.map((todo) =>
                    <li key={todo.task_id} className="list-group-item">
                        {todo.description}
                        <button type="button" className="close right" aria-label="Close"
                                onClick={() => console.log("ok")}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </li>
                )}
            </ul>
        )
    }
}

export default Grid