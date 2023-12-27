import useNotesStore from '@/store/notesStore'
import React from 'react'
import Link from 'next/link'

const EditorSidebar = ({ active }) => {
    const { notes } = useNotesStore();
    console.log("notes", notes)
    return (
        <div className="hidden lg:block lg:w-2/12   pt-20 border-r border-gray-200">
            <div className="flex flex-col gap-2 p-2">
                {
                    notes.map((note, index) => (
                        <Link href={`/edit/${note.docId}`}>
                            <div className={`${active === note.docId ? 'bg-blue-200' : ''} hover:bg-gray-100 w-full  px-2 py-1.5 rounded-md my-0 text-xs font-medium cursor-pointer`}>{note.title}</div>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default EditorSidebar