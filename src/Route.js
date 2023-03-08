import { Route, Routes } from 'react-router-dom'
import MyApp from './App'
import SignUp from './SignUp'
import App from './next'
import Update from './update'
import Delete from './Delete'



function Routing() {
  return (
    <>
    <Routes>
    <Route path="/" element={<MyApp/>}/>
    <Route path="/delete" element={<Delete/>}/>
    <Route path="/Login" element={<App/>}/>
    <Route path="/Update" element={<Update/>}/>
    <Route path="/Update" element={<Update/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default Routing