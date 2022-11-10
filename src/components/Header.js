import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'



const Header = ({ title, onClick, showAddForm }) => {
  const location = useLocation()

  return (<>
    <header className='header'>
      <h1 className='logo'>{title}</h1>
      <h4>Version 0.0.1</h4>
      {location.pathname === '/' && (
        <Button
          color={showAddForm ? 'yellow' : 'black'}
          text={showAddForm ? 'Close' : 'Add'}
          onClick={onClick}
        />
      )}
    
    </header>
      <hr />
      </>)
}

Header.defaultProps = {
  title: 'A Basic Reminder App by React.js',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
