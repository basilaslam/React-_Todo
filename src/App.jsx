import React, { useState } from 'react';
import './App.css';
function App() {
  let d = new Date();
  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  let nd = new Date(utc + (3600000 * +5.5));
  let ist = nd.toLocaleString();









  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  var newDate = new Date();
      var weekdays = new Array(7);
      weekdays[0] = "Sunday";
      weekdays[1] = "Monday";
      weekdays[2] = "Tuesday";
      weekdays[3] = "Wednesday";
      weekdays[4] = "Thursday";
      weekdays[5] = "Friday";
      weekdays[6] = "Saturday";
      var day = weekdays[newDate.getDay()];
      


      function handleAdd(){
        setTodos(todo.length !== 0 ? [...todos, { id: Date.now(), text: todo, status: false, time: ist }] : [...todos])
        setTodo("")
      }

   
      
  return (
    <div className="container">
      <div className="app">

        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {day} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input className='input' type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="🖊️ Add item..." />
          <span class="material-symbols-outlined" onClick={handleAdd}>add</span>
        </div>
        <div className="todos">
          <h2 className='taskhead'>Task list</h2>
          {
            todos.length !== 0 ? todos.map((todoVal) =>

              <div className="todo">
                <div className="left">
              
                  <input onChange={(e) => {
                    setTodos(todos.filter((obj) => {
                      if (todoVal.id === obj.id) {
                        todoVal.status = e.target.checked
                      }
                      return obj
                    }))
                  }} value={todoVal.status} type="checkbox" name="" className='checkBox' id={todoVal.id} />
                  <label class="circle" for={todoVal.id} ></label>             
                  <p>
                    <span className={todoVal.status ? "success" : "pending"}>{todoVal.text}</span>
                    <br />
                      
                  </p>

                </div>
                <div className="right">
                  <i className="fas fa-times" ></i>

<span class="material-symbols-outlined" onClick={() => setTodos(todos.filter(obj2 => {
                    let temp;
                    if (obj2.id !== todoVal.id) {
                      temp = obj2
                    }
                    return temp;
                  }))}>cancel</span>
               </div>
              </div>
            )
              : <div className="todo">
                <div className="left">
                  <p className='emptyValue'>No Tasks....</p>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
    
  );
  
}

export default App;
