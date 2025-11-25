import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const itemList = [
  { id: 1, name: "Phone", description: "Phone details..." },
  { id: 2, name: "Laptop", description: "Laptop details..." },
  { id: 3, name: "Headphones", description: "Headphones details..." },
  { id: 4, name: "Pen", description: "Pen details..." },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App items={itemList} />
  </StrictMode>,
)
