// import './App.css';
// import {useState} from 'react';

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState ("");

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//     }
//     setTodoList( [...todoList, task]);
//   };

//   const deleteTask = (id) => {
//     setTodoList(todoList.filter((task) => task.id !== id));
//     };

//   return (
//     <div className="App">
//       <div className='addTask'>
//         <input onChange = {handleChange} placeholder="Enter your Todo here" />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div clasName="list">
//         {todoList.map((task) => {
//           return <div className="display">
//             <h1>{task.taskName}</h1>
//             <button onClick ={() => deleteTask(task.id)}>DEL</button>
//             </div>
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
