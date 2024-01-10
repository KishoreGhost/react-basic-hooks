import { useState } from 'react'
import './App.css'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseContext from './components/UseContext'
import ContextContent from './components/ContextContent'

function App() {
  return (
    <>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      <UseContext>
        <ContextContent />
      </UseContext>
    </>
  )
}

export default App
