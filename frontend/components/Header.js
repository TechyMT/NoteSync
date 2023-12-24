import React from 'react'
import { categories } from '@/constants/data'

const Header = () => {
    return (
        <div className="flex mt-3">
            <div className="title-sc">
                <span className='text-xs uppercase text-gray-600'>Overview</span>
                <h2 className='text-2xl font-semibold'>Notes <span className="text-gray-600 text-lg">(234)</span></h2>
            </div>
            <div className="flex ml-12 flex-shrink gap-1 items-end">
                {
                    categories.map((item, index) => (
                        <span className={`nav-item flex items-center p-2 py-1 justify-start flex-shrink-0 rounded-lg  font-medium ${index == 1 ? "bg-blue-500 shadow text-white" : "bg-gray-50"}`}>
                            {item.title}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default Header