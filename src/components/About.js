import React from 'react'
import "./About.css"
// import bgImg from "../profileBg.svg"
import profileAvatar from "../avatar.png"
export default function About() {
  return (
    <div className='AboutParent'>
      <div className='MainCardProfile'>
        <img src={profileAvatar}/>
        <h1>Name: Hamdy Mohamed</h1>
        <h2>NickName: Askander</h2>
        <h3>Phone: +201278859768</h3>
        <h4>Address: Alexandira Eg</h4>
        <h5>Age: 19</h5>
      </div>
      <button className='profileBtn'>Edit</button>
    </div>
  )
}
