import "./Home.css"
import AddIcon from "./add.png"
import ToDoCard from "./../components/ToDoCard/ToDoCard"
import { useEffect, useState } from "react"
import toast,{Toaster} from "react-hot-toast"
import swal from "sweetalert2";


function Home() {
 
const[todoList,setTodoList]=useState([])
const [newTask,setNewTask] = useState("")
const [category, setCategory] =useState("")
 
useEffect(()=>{
  const savedTodoList = localStorage.getItem("todoList")
  if(savedTodoList){
    setTodoList(JSON.parse(savedTodoList))
  }
},[])

useEffect(()=>{
if(todoList.length===0)return
localStorage.setItem("todoList",JSON.stringify(todoList))
},[todoList])

function deleteItem(index){
  swal.fire({
    title:'Are you sure?',
    text:"You Want to delete this Task!",
    icon:'warning',
    showCancelButton:true,
   }).then((result)=>{
    if(!result.isConfirmed){
     return
    }
    const newTodoList = todoList.filter((item,i)=>{
      if(i!==index){
        return true
      }
      else{
        return false
      }
    })
    setTodoList(newTodoList)
   })

}
  return (  <div>
  <h1 className="app-title">ToDoApp📃</h1>
 
  <div className="todo-list-container">
  { todoList.map((todoItem,i)=>{
    const { task,category}= todoItem
    
   return <ToDoCard key={i} index={i} task={task} category={category} deleteItem={deleteItem} />
 
})}
     {
      todoList.length ===0 
      ?
     <p style={{textAlign:"center"}}>
      No task to show,please add new Task
      </p>
      :null
     }
</div>
  <div className="add-todo-list-container">
    <input type="text"
     className="add-input" 
     placeholder="add new task!"
     value={newTask}
     onChange={(e)=>setNewTask(e.target.value)}
     />
     <select className="category-select"
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
      >
      <option value="">Select a category</option>
      <option value="Learning">Learning</option>
      <option value="Work">Work</option>
      <option value="Personal">Personal</option>
      <option value="Shopping">Shopping</option>
      <option value="Health">Health</option>
      <option value="Others">Others</option>
     </select>

    <img 
    src={AddIcon}
     alt="add" 
     className="add-icon"
     onClick={()=>{
      if(newTask === ""){
        toast.error('Task cannot be empty!')
        return
      }
      if(category === ""){
        toast.error('please select a category!')
        return
      }
      setTodoList([...todoList ,{task: newTask,category:category}])
      setNewTask("")
      setCategory("")
      toast.success("Task Added Sucessfully!")
     
     }}
     />
  </div>
  <Toaster position="right-top"/>
    </div>
  )
}

export default Home
