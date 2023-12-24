import React from 'react'
import { navList } from '@/constants/data'
const Sidebar = () => {

    return (
        <div className='w-1/6 bg-white h-screen'>
            <div className="logo px-4 py-3 flex items-center">
                <img src='/applogo-tp.png' className='w-16 h-16' />
                <div className="text-slate-900 font-bold text-3xl -ml-2">oteSync</div>
            </div>
            <div className="navlist flex flex-col py-4 px-4  ">
                {
                    navList.map((item, index) => (
                        <div className={`nav-item flex items-center justify-start gap-3 w-full px-8 py-2 my-1 rounded-lg  font-medium ${index == 1 ? "bg-blue-500 shadow text-white" : ""}`}>
                            {item.icon}
                            <span> {item.title}</span>
                        </div>
                    ))
                }
            </div>
            {/* categories */}


        </div>
    )
}

export default Sidebar