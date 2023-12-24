import { MdDelete, MdDashboard, MdErrorOutline, MdToday } from "react-icons/md"

export const navList = [
    { title: "Overview", icon: <MdDashboard className='text-xl' /> },
    { title: "Today", icon: <MdToday className='text-xl' /> },
    { title: "Important", icon: <MdErrorOutline className='text-xl' /> },
    { title: "Trash", icon: <MdDelete className='text-xl' /> },
];


export const categories = [
    {
        "color": "bg-red-500",
        "title": "UI"
    },
    {
        "color": "bg-yellow-500",
        "title": "UX"
    },
    {
        "color": "bg-green-500",
        "title": "Frontend"
    },
    {
        "color": "bg-blue-500",
        "title": "Backend"
    },
    {
        "color": "bg-indigo-500",
        "title": "Fullstack"
    },
    {
        "color": "bg-purple-500",
        "title": "DevOps"
    },
    {
        "color": "bg-pink-500",
        "title": "Testing"
    },
    {
        "color": "bg-teal-500",
        "title": "Design"
    },
    {
        "color": "bg-red-500",
        "title": "Security"
    }
]