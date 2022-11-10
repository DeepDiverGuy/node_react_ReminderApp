import React from 'react'
import Reminder from './Reminder'

const Reminders = ({ reminders, onDelete, onToggleNotify, onToggleFinished }) => {
  return (
    <div>
      {reminders.map((reminder, index) => (
        <Reminder key={reminder.id} reminder={reminder} onDelete={onDelete} onToggleNotify={onToggleNotify} onToggleFinished={onToggleFinished} />
      ))}
    </div>
  )
}

export default Reminders