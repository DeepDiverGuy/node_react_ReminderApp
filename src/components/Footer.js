import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Mohammad Shagor Khan - The DeepDiverGuy &copy; 2022</p>
      <Link to='/'>Home | </Link>
      <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer