import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm Armando</h1>
      <ul>
        <li>Occupation: Software Engineer</li>
        <li>Education: Univeristy of California, Merced</li>
        <li>Skills:
          <ul>
            <li>Golang</li>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>Linux</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Html/Css</li>
          </ul>
        </li>
        <li>
          Certifications:
          <ul>
            <li>Certified Kubernetes Administrator (CKA)</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default App
