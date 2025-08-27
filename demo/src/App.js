import React from 'react'
import { Fan } from './Fan'
import CustomButton from './CustomButton'
import './App.css'
export default function App() {
  let styles={
    color:"red",
    background:"yellow",
    padding:"1rem 3rem",
    margin:"10px",
    borderRadius:"10px",
    fontSize:"24px",
    fontWeight:"600"
  }
  let btn1={...styles};
  btn1.background="white"
  btn1.border="2px solid lightblue"
  let login =true;
  return (
    <div>
      {/* Welcome to React js */}
      <Fan intro={"coming from home"} login={login} age={17}welcome={false}/>
      <br></br>
      <CustomButton title={"Login"} style={styles}/>
      <CustomButton title={"signup"}style={btn1}/>
      <CustomButton style={btn1}/>

    </div>
    
  )
}
