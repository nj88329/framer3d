import './App.css'
import ResponsiveAppBar from './ResponsiveAppBar';
import Body from './Body.jsx'
import Footer from './Footer.jsx';
import ThreeD from './Components/ThreeD.jsx';
import Sphere from './Components/Sphere';

function App() {
  return (
    <>
           <ResponsiveAppBar style={{margin:0}}/>
                <Body  />
              <Footer/>
    </>
  )
}

export default App
