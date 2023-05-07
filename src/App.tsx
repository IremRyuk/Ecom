import {Route,Routes} from 'react-router-dom'
// import Home from "./Pages/Home"
import LogIn from './Pages/LogIn'
import SignUp from './Pages/Signup'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<LogIn />} />
    <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
