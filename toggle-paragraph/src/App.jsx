import React from 'react'
import ToggleList from './components/ToggleList'

const App = ({items}) => {
  return (
    // new comment
    <div className='container'>
      <ToggleList items ={items} />
    </div>

    
  )
}

export default App