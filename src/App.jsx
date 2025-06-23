import './App.css'
import ResponsiveAppBar from './ResponsiveAppBar';
import Body from './Body.jsx'
import Footer from './Footer.jsx';
import ThreeD from './Components/ThreeD.jsx';
import Sphere from './Components/Sphere';
import  Animation  from './Components/Animation';
import { Outlet } from 'react-router-dom'; // ✅ This renders the matched route



function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <ResponsiveAppBar />
      <main className="flex-grow">
        <Body />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
