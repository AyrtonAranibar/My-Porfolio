import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingSpinner } from './components/LoadingSpinner'
import { DarkModeButton } from './components/DarkModeButton' 
import { NavigationBar } from './components/NavigationBar'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
// import { ParallaxEffect } from './components/ParallaxEffect'

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
    },2000);
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
        <Projects/>
      </div>
    }
    </>
  )
}

export default App
