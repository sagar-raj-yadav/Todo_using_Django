import { useState ,useEffect} from "react";
import axios from 'axios';

const Todo = () => {

    const [item,setItem]=useState("");
    const [task,setTask]=useState([]);


    const AddTask=async()=>{
        if(item.trim()!=="")
        {
            try{
            await axios.post('http://localhost:8000/api/todos/add/',{title:item})
            setItem("");
            fetchTask();
            }
            catch(error){
                console.log(error);
            }
        }
    }

    const fetchTask=async()=>{
        const response=await axios.get('http://localhost:8000/api/todos/');
        setTask(response.data);
    }

    useEffect(()=>{
        fetchTask();
    },[])

    const deleteTask=async(id)=>{
        try{
        await axios.delete(`http://localhost:8000/api/todos/delete/${id}/`)
        fetchTask();
        }
        catch(error){
            console.log(error);
        }
    }


  return (
    <>

   
<div style={styles.container}>
    <input 
    type="text"
    placeholder="Add Task"
    value={item}
    onChange={(e)=>setItem(e.target.value)}
    style={styles.input}
    />

    <button 
    style={styles.button}
    onClick={AddTask}>Add Task</button>
</div>

<div >
    {
        task.map((value, index) => {
            return (
                <div 
                    style={styles.alltask}
                    key={index}>
                    <p style={styles.taskTitle}>{value.title}</p>
                    <button style={styles.editButton}>Edit</button>
                    <button style={styles.deleteButton} onClick={() => deleteTask(value.id)}>Delete</button>
                </div>
            )
        })
    }
</div>

    </>
  )
}

const styles={
  container:{
    display:"flex",
    margin:"10px 0 0 30% ",
    gap:"20px"
  },
  input:{
    padding:"10px",
    borderRadius:"20px",
    width:"40%"
    
  },
  button:{
    padding:"8px",
    width:"10%",
    borderRadius:"20px",
    cursor:"pointer",
    backgroundColor:"#FF3355",
    color:"white",
    fontWeight:"bold",
    border:"none"
  },
    alltask: {
        display: "flex",
        justifyContent: "center",
        margin: "10px 30%",
        border: "1px solid #ddd",
        padding: "10px 80px",
        width:"40%",
        maxWidth: "400px",
        borderRadius: "15px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#CCFFCC",
        transition: "transform 0.2s, box-shadow 0.2s",
    },
    alltaskHover: {
        transform: "scale(1.02)",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
    },
    taskTitle: {
        margin: 0,
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333",
        flex: 1,
    },
    editButton: {
        backgroundColor: "#4caf50",
        color: "#fff",
        border: "none",
        padding: "5px 10px",
        borderRadius: "20px",
        cursor: "pointer",
        marginRight: "5px",
        transition: "background-color 0.3s",
    },
    deleteButton: {
        backgroundColor: "#f44336",
        color: "#fff",
        border: "none",
        padding: "5px 10px",
        borderRadius: "20px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    editButtonHover: {
        backgroundColor: "#45a049",
    },
    deleteButtonHover: {
        backgroundColor: "#e53935",
    },

}


export default Todo