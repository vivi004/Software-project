
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout'
import HomeLayout from './layout/Homelayout'
import UserLayout from './layout/Userlayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminUsers from './pages/Admin/AdminUsers'
import UserDashboard from './pages/User/UserDashboard'
import Accessories from './pages/Web/Accessories'
import Cartpage from './pages/Web/Cartpage'
import Ethnic from './pages/Web/Ethnic'
import Home from './pages/Web/Home'
import Login from './pages/Web/Login'
import MensCollections from './pages/Web/MensCollections'
import Newarrival from './pages/Web/Newarrival'
import NotFound from './pages/Web/Notfound'
import Register from './pages/Web/Register'
import Western from './pages/Web/Western'
const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/newarrivals' element={<Newarrival/>}/>
                        <Route path='/western' element={<Western/>}/>
        <Route path="/cart" element={<Cartpage />} />
     
                        <Route path='/ethnic' element={<Ethnic/>}/>
                        <Route path='/accessories' element={<Accessories/>}/>
                        <Route path='/menscollections' element={<MensCollections/>}/>
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route>
                    <Route element={<UserLayout/>}>
                        <Route path='/user/dashboard' element={<UserDashboard />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            
        </>
    )
}

export default App