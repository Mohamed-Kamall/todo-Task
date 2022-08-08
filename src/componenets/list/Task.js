import React from 'react'
import "./task.css"

function Task({item,key,removeTask}) {
  
  return ( item &&
      <div className='single-task'>
        <div className='time'>{item.timeStamp}{console.log(key)}</div>
        <div className='task'>{item.task}</div>
        <button className='bttn' onClick={()=>removeTask(key)}>×</button>
      </div>
  )
}

export default Task