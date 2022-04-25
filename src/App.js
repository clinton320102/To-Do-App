import { useState, useEffect } from 'react';
import './App.css';
import Form from './Component/Form';
import Todos from './Component/Todos';

function App() {
  const [showForm, setShowForm] = useState(false)
  const handleShowForm = () => setShowForm(true)
  const closeForm = () => setShowForm(false) 

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // fetch tasks 
  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // add tasks
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()

    setTasks([ ...tasks, data ])
  }

  // delete tasks
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
    ? setTasks(tasks.filter((task) => task.id !== id))
    : alert("Error Deleting This Task")
  }

  return (
    <div className="App">
      <header>
        <h1>To Do App</h1>
        <button className='add__button'
          onClick={handleShowForm}
        >
          add task +
        </button>
      </header>
      <h3 className='message'>You have <span>{tasks.length}</span> tasks to do</h3>
      {showForm && <Form onClose={closeForm} onAdd={addTask} />}
      <div className='grid'>
        {tasks.length > 0 ? 
          <Todos tasks={tasks} onDelete={deleteTask} /> 
          : <h1 className='no__task'>No Task To Show</h1>
        }
      </div>
    </div>
  );
}

export default App;
