import React from 'react'
import { navList } from '@/constants/data'
import { HiMenuAlt3, HiMoon, HiSun } from 'react-icons/hi'
import { HiMiniMoon } from 'react-icons/hi2'
import { useTheme } from 'next-themes'

const Sidebar = () => {
    const [closed, setClosed] = React.useState(false)


    // theme 
    const { theme, setTheme } = useTheme();
    console.log(theme)

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }



    return (
        <div className=' bg-white dark:bg-gray-900 h-screen rounded-md flex flex-col justify-between'>
            <div className="top">
                <div className="logo flex justify-between py-4 items-center transition-all">
                    <div onClick={() => setClosed(!closed)} className='flex justify-between w-full'>
                        {
                            closed ? (
                                <img src="/applogo-tp.png" alt="" className={`  w-10 h-10 mx-auto`} />
                            ) : (
                                <div className={` text-slate-900 font-mulish ml-6 font-semibold text-2xl`}>NoteSync</div>
                            )
                        }
                    </div>

                    <span onClick={() => setClosed(!closed)} className={`${closed && 'hidden'} mr-6 p-2 cursor-pointer  rounded-full active:bg-blue-50`}>
                        <HiMenuAlt3 className='text-xl' />
                    </span>
                </div>
                <div className="navlist flex flex-col py-4 px-3  ">
                    {
                        navList.map((item, index) => (
                            <div key={index} className={`nav-item flex items-center justify-start gap-3 w-full px-4 py-2 my-1 rounded-lg cursor-pointer  font-medium dark:hover:bg-slate-600/30  ${index == 0 ? "bg-blue-400  text-white" : " hover:bg-blue-50 "}`}>
                                {item.icon}
                                <span className={`${closed && 'hidden'}`}> {item.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* categories */}

            <div className="py-4 px-2">
                <div className="bottom-3  flex gap-4 justify-between">
                    <button onClick={() => changeTheme()} className="flex items-center gap-2 flex-1 hover:bg-slate-600/30 w-full p-2 px-4 rounded-md cursor-pointer">
                        {theme === 'light' ? <HiMiniMoon className={`${closed && 'hidden'} text-xl`} /> : <HiSun className={`${closed && 'hidden'} text-xl`} />}
                        <div className={`${closed && 'hidden'} font-mulish  text-md `}>DarkMode</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar