import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingSpinner } from './components/LoadingSpinner'
import { DarkModeButton } from './components/DarkModeButton' 
import { NavigationBar } from './components/NavigationBar'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = React.useState(0)
  const [loading , setLoading] = React.useState(true)
  const [darkMode , setDarkMode] = React.useState(true)

  React.useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      // window.onload = () =>{
        setLoading(false);
      // }
    },500);
  },[]);

  return (
    <>
    {
      loading ?
        <LoadingSpinner/>
      :
      <div className={'App w-full h-screen '} id="App">
        {/* <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}/> */}
        <Header/>
        <NavigationBar/>
        
      </div>
    }
    </>
  )
}

export default App
