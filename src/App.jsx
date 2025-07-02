import './App.css'
import Header from './Header.jsx'
import { Outlet } from 'react-router-dom'
// import Footer from './Footer.jsx'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default App
