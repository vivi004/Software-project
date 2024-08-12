import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {

    return (
        <>
            <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-col overflow-y-auto'>
                <Navbar />
                <Outlet />
                <div className='w-full h-full font-bold flex flex-row flex-col justify-end items-center gap-12'>
                
                <Footer />
                </div>
            </div>
        </>
    )
}

export default HomeLayout