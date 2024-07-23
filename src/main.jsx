import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {App as Canvas} from './App'
import { Overlay } from './Overlay'




ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Canvas/>
        <Overlay/>
      </React.StrictMode>
        
)
