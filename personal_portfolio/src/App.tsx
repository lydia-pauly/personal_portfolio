import './App.scss'
import NavigationBar from './components/NavigationBar'
import NavigationFooter from './components/NavigationFooter'
import SisyphusAnimation from './components/SisyphusAnimation'
import Home from './components/pages/home.tsx'



import { createBrowserRouter, RouterProvider } from 'react-router'


const router = createBrowserRouter([
  {
    path: "/"
    element: <Home />
  }
])





function App() {

  return (
    <>
      <SisyphusAnimation />
      <NavigationBar />
      <NavigationFooter />
    </>
  )
}

export default App
