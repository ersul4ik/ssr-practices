import React from 'react'

const AddTodo = ({ addTask }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        addTask(input.value)
        input.value = ''
      }}>
        <input type="text" id="inputTask" ref={node => { input = node}} placeholder ="input todo"/>
        <button className="btn2" type="submit"> Add Todo </button>
      </form>
    </div>
  )
}

export default AddTodo