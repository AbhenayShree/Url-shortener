import { createBrowserRouter } from 'react-router-dom'
import './App.css'

const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>  
      }
    ]

  }
])

function App() {


  return (
    <div className="text-2xl">HELLO</div>
  )
}

export default App
