import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Button from './Button'

const Reminder = ({ reminder, onDelete, onToggleNotify, onToggleFinished }) => {
  return (
    <div style={{marginTop:"30px",backgroundColor:"#463308",padding:"10px",borderRadius:"10px"}}
      className={`reminders ${reminder.notify && 'notify'} `}
      onDoubleClick={() => onToggleNotify(reminder.id)}
    >
      <h3 className='reminder_first_line'>
        {reminder.finished ? <s>{reminder.text}{' '}</s> : reminder.text }
        {/* {reminder.text}{' '} */}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(reminder.id)}
        />
      </h3>
      <p>{reminder.time}</p>
      <p>Notification: {reminder.notify ? 'on' : 'off'}</p>
      <p onClick={() => onToggleFinished(reminder.id)} > <button style={{border:"none",padding:"5px",borderRadius:"5px",backgroundColor:"#7B7B7C",color:"white"}}> Finished? </button></p>
    </div>
  )
}

export default Reminder