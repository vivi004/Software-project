
import Upbar from "@/components/User/Upbar"
import { Outlet } from "react-router-dom"
import React from 'react'

const UserLayout = () => {
    return (
        <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
     
      <div className='h-screen w-screen flex justify-center items-center flex-col'>
        <Upbar />
        <div className='h-[92vh] w-full'>
        <Outlet />
        </div>
      </div>
    </div>
    )
}

export default UserLayout