import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroComponent from './components/IntroComponent'
import ChilComponent from './components/ChildComponent'
import EventComponent from './components/EventComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IntroComponent/>
      <ChilComponent/>
      <EventComponent/>
    </>
  )
}

export default App
