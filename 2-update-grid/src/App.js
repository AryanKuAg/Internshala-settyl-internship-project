import React from 'react'
import GridItems from './GridItems'
import "./App.css"

function App() {
  const [items, setItems] = React.useState([])
  function addItemHandler () {
    setItems(pre => {
      const newThing = {id: Math.abs(Math.random() * 1000), name: 'Jhakas', age: 32}
      return [...pre, newThing]
    })
  }
  return (
    <div className='app__center'>
      <button onClick={addItemHandler}>Add Item</button>
      <GridItems items={items} />
    </div>
  )
}

export default App