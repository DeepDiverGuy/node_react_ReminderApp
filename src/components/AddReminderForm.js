import { useState } from 'react'
import React from 'react'



const AddReminderForm = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const [notify, setNotify] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text || !time) {
      alert('Please add a task')
      return
    }

    onAdd(text, time, notify)

    setText('')
    setTime('')
    setNotify(true)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Reminder Description</label>
        <input
          type='text'
          placeholder='Add Reminder'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <input
          type='checkbox'
          checked={notify}
          value={notify}
          onChange={(e) => setNotify(e.currentTarget.checked)}
        />
        <label>Notify me</label>
      </div>

      <input type='submit' value='Save Reminder' className='btn btn-block' />
    </form>
  )
}

export default AddReminderForm