import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {Router} from 'react-router-dom';
import Reminders from './components/Reminders';
import Header from './components/Header';
import Footer from './components/Footer';
import AddReminderForm from './components/AddReminderForm.js';
import About from './components/About';

const uuid = require('uuid');



const App = () => {


  const [showAddForm, setShowAddForm] = useState(false);

  const [reminders, setReminders] = useState([
    {
      id: '1',
      text: 'Study Maths',
      time: '30th October, 2022 - 10 AM',
      notify: true,
      finished: false
    },
    {
      id: '2',
      text: 'Do chores',
      time: '30th October, 2022 - 11 AM',
      notify: true,
      finished: false
    },
    {
      id: '3',
      text: 'Go out',
      time: '30th October, 2022 - 12 PM',
      notify: true,
      finished: false
    }
  ]);

  // Adding Reminders
  const addReminder = (text, time, notify) => {
    const id = uuid.v4();
    const newReminder = {id:id, text, time, notify, finished:false};
    setReminders([...reminders, newReminder])
  };

  // Toggle Notification Logic
  const toggleNotify = (id) => {
    setReminders(
      reminders.map((reminder) => reminder.id === id ? { ...reminder, notify: !reminder.notify } : reminder)
    )
  };

  // Toggle Finished Logic
  const toggleFinished = (id) => {
    setReminders(
      reminders.map((reminder) => reminder.id === id ? {...reminder, finished:!reminder.finished} : reminder)
    )
  };

  // Deleting Reminders
  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  };


  return (
    <Router>

      <div className='container'>

        <Header
          title='Reminder App'
          onClick={() => setShowAddForm(!showAddForm)}
          showAddForm={showAddForm}
        />
        
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddForm && <AddReminderForm onAdd={addReminder} />}
                {reminders.length > 0 ? (
                  <Reminders
                    reminders={reminders}
                    onDelete={deleteReminder}
                    onToggleNotify={toggleNotify}
                    onToggleFinished={toggleFinished}
                  />
                ) : (
                  'No Reminder To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App





// useEffect(() => {
//   const getTasks = async () => {
//     const tasksFromServer = await fetchTasks()
//     setTasks(tasksFromServer)
//   }

//   getTasks()
// }, [])

// // Fetch Tasks
// const fetchTasks = async () => {
//   const res = await fetch('http://localhost:5000/tasks')
//   const data = await res.json()

//   return data
// }

// // Fetch Task
// const fetchTask = async (id) => {
//   const res = await fetch(`http://localhost:5000/tasks/${id}`)
//   const data = await res.json()

//   return data
// }

// // Add Task
// const addTask = async (task) => {
//   const res = await fetch('http://localhost:5000/tasks', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(task),
//   })

//   const data = await res.json()

//   setTasks([...tasks, data])

//   // const id = Math.floor(Math.random() * 10000) + 1
//   // const newTask = { id, ...task }
//   // setTasks([...tasks, newTask])
// }

// // Delete Task
// const deleteTask = async (id) => {
//   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
//     method: 'DELETE',
//   })
//   //We should control the response status to decide if we will change the state or not.
//   res.status === 200
//     ? setTasks(tasks.filter((task) => task.id !== id))
//     : alert('Error Deleting This Task')
// }

// // Toggle Reminder
// const toggleReminder = async (id) => {
//   const taskToToggle = await fetchTask(id)
//   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

//   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(updTask),
//   })

//   const data = await res.json()

//   setTasks(
//     tasks.map((task) =>
//       task.id === id ? { ...task, reminder: data.reminder } : task
//     )
//   )
// }