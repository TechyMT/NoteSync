import React from 'react'
import Link from 'next/link'
import { MdEdit } from 'react-icons/md'

const NoteDetails = () => {
    return (
        <div>
            <div className="fixed w-full shadow bg-white z-50">
                <div className="flex z-50 mx-auto  max-w-screen-xl  justify-between items-center  header fle">
                    <Link href='/dashboard'>
                        <div className="logo    px-4 py-3 flex items-center">
                            <img src='/applogo-tp.png' className='w-14 h-14' />
                            <div className="text-slate-900 font-bold text-3xl -ml-2">oteSync</div>
                        </div>
                    </Link>
                    <div className=" h-10 rounded-full flex items-center justify-center gap-3 border border-blue-500 active:bg-blue-200 px-2 py-1 cursor-pointer">
                        <MdEdit className='text-2xl text-gray-800' />
                        <span>Edit</span>
                    </div>
                </div>
            </div>
            <div className="conatiner max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
                <h3 className='text-4xl text-gray-800 font-bold '>Lorem ipsum dolor sit amet consectetur.</h3>
                {/* Tags */}
                <div className='flex items-center mt-4'>
                    <div className='bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>Tag1</div>
                    <div className='bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>Tag2</div>
                    <div className='bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>Tag3</div>
                </div>
                {/* Note */}

                <p className='text-md mt-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.

                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.

                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis quasi dicta tenetur rem praesentium aliquam nemo debitis vel. Impedit voluptate, soluta quibusdam error rem praesentium! Voluptatibus dolores numquam consectetur.
                </p>
            </div>
        </div>
    )
}

export default NoteDetails