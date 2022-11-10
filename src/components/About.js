import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <br />
      <h3> <b> About This App: </b> </h3> <span style={{color:"#ede0e0"}}> This is a simple React App created with Node as a hobby project. This App has 'states' that remember the Reminders. You can add a reminder clicking the 'ADD' button. Also you can Delete those easily just by clicking the 'x' button. You can also switch notifications 'on' or 'off' by clicking on a remider twice! Lastly, you can click the "finished?" button when you don't need it.</span>
      <br />
      <br />
      <hr />
      <br />
      <h3><a href="https://github.com/DeepDiverGuy">Github</a> | M S K | <a href="https://www.linkedin.com/in/mohammad-shagor-1a271120b">LinkedIn</a> </h3>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About