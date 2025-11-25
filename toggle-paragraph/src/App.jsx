import React from 'react'
import ToggleList from './components/ToggleList'

const App = ({items}) => {
  return (
    <div className='container'>
      <ToggleList items ={items} />
    </div>
  )
}

export default App