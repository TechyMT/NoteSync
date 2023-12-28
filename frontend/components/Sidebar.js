import React from 'react'
import { navList } from '@/constants/data'
import { HiMenuAlt3, HiMoon } from 'react-icons/hi'
import { HiMiniMoon } from 'react-icons/hi2'
const Sidebar = () => {
    const [closed, setClosed] = React.useState(false)

    return (
        <div className=' bg-white h-screen rounded-md flex flex-col justify-between'>
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
                            <div key={index} className={`nav-item flex items-center justify-start gap-3 w-full px-4 py-2 my-1 rounded-lg cursor-pointer  font-medium  ${index == 0 ? "bg-blue-400  text-white" : " hover:bg-blue-50"}`}>
                                {item.icon}
                                <span className={`${closed && 'hidden'}`}> {item.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* categories */}

            <div className="py-4 px-6">
                <div className="bottom-3  flex gap-4 justify-between">
                    <div className="flex items-center gap-2">
                        <HiMiniMoon className="text-slate-900 font-mulish font-semibold text-md " />
                        <div className={`${closed && 'hidden'} text-slate-900 font-mulish  font-semibold text-md `}>DarkMode</div>
                    </div>
                    <label class={`${closed && 'hidden'} relative inline-flex items-center cursor-pointer`}>
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar