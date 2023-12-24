import { UserAuth } from '@/utils/auth'
import { Main } from 'next/document'
import React from 'react'

const dashboard = () => {
    const { signOut } = UserAuth()

    return (
        <main className='conatiner p-16'>
            <button className='px-4 py-2 bg-blue-500 text-white font-medium rounded-md' onClick={signOut}>Signout</button>
        </main>
    )
}

export default dashboard