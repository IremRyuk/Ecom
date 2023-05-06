import Nav from "./Components/Nav"
import {Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import BottomNavigation from "./Components/BottomNavigations"

function App() {
  return (
    <>
    <Nav />
    <BottomNavigation />
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default App
