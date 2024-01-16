import React from 'react'

const Listtask = ({task,index,removeTask}) => {
  return (
    <div>
        <div className='list-tasks'>
            {task.title}
            <button className='delete-btn' onClick={() => {removeTask(index)}}>delete</button>

        </div>
    </div>
  )
}

export default Listtask