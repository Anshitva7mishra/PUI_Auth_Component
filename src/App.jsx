// import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Forgotpassword from './pages/Forgotpassword'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/PUI/login' element={<Signin />} />
        <Route path='/PUI/login/forgot-password' element={<Forgotpassword />} />
      </Routes>
    </div>
  )
}

export default App