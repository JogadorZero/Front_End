import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroComponent from './components/IntroComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IntroComponent/>
    </>
  )
}

export default App
