import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import ButtonComponent from './ButtonComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
     Collaborative page
     <ButtonComponent />
    </>
  )
}

export default App
