
import React from 'react'

const TodoList = () => {
  return (
    <div className='container'>

        {/* input div */}

        <div className='innput'>

            <input
            type='text'
            placeholder='Enter the task'
            name='todo'
            />

            <button>Add</button>

        </div>
    </div>
  )
}

export default TodoList