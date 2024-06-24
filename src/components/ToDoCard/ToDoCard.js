import React from 'react'
import "./ToDoCard.css"
import ImgDel from "./delete.png"

function ToDoCard({index,task,category,deleteItem}) {

  const CATEGORY_EMOJI_MAP = {
    Learning:"📚",
    work:"🧑‍🏭",
    Shopping:"🛒",
    health:"🧑‍⚕️",
    others:"🎑"
  
  }
  const CATEGORY_COLOURS ={
    Learning:"yellow",
    Work:"Purple",
    Shopping:"blue",
    Health:"red",
    Others:"gray",
    Personal:"pink"
  
  }
  const theme ={
    primary:"#80ccff",
    primaryDark:"#0077cc",
    secondary:"#f4f4f4",
    text:"#333",
 
}
  return (
    <div className='todo-card'>
       <img src={ImgDel }
        alt="Delete" className='delete-icon' 
        onClick={()=>{
        deleteItem(index)
       }}/>
     {task}
      <span className='category' style={{
        backgroundColor: CATEGORY_COLOURS[category]
      }}>
     {CATEGORY_EMOJI_MAP[category] } {category}
      </span>
    
    </div>
  )
}

export default ToDoCard
