import React from 'react'
import "./App.css"

function App() {
  const [show, setShow] = React.useState(true)

  const toggleHandler = () => {
    setShow(pre => !pre)
  }
  return (
    <div className='app_main'><button onClick={toggleHandler}>Toggle</button>
    {show && <div className='the_component'></div>}
    </div>
  )
}

export default App