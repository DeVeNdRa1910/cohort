
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import React from 'react'
// import { Landing } from './components/Landing'
// import { Dashboard } from './components/Dashboard'


import { lazy, Suspense } from 'react'
// Suspense API , asynchronuos components fetch , asynchronuos data fetching
const Dashboard = React.lazy(()=>import('./components/Dashboard'))
const Landing = React.lazy(()=>import('./components/Landing'))
// website is more optimal

function App() {

  return (
    <div>

      {/* changing page by buttons
      <div>
        <button onClick={()=>{
          window.location.href = '/'
        }} >Landing page</button>
        <button onClick={()=>{
          window.location.href = '/dashboard'
        }}>Dashboard page</button>
      </div> */}
      {/* there is a problem with this -> when you click on the button all the window are geting refresh and this not functionality of SPA*/}
      {/* to prevent this problem we have useNavigate hook provided by react-router-dom */}
       
      {/* useNavigate */}
      {/* <div>
        <button onClick={()=>{
          navigate("/")
        }} >Landing page</button>
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard page</button>
      </div> */}
      {/* this is showing error , useNavigate should be use in Onside BrowserRouter component*/}
      {/* even use of useNavigate also be inside BrowserRouter */}
      {/* make a component */}

      <div style={{backgroundColor:'black' , color:'white'}}>
        Hi this is the navbar
      </div> 

      <BrowserRouter>
        <Appbar />
        <Routes>
          {/* Suspense API */}
          <Route path='/dashboard' element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
          <Route path='/' element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {

  const navigate = useNavigate()

  return (
    <div>
        <button onClick={()=>{
          navigate("/")
        }} >Landing page</button>
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard page</button>
    </div>
  )
}



export default App
