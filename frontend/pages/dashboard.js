"use client";
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { UserAuth } from '@/utils/auth';
import React, { useEffect } from 'react';
import Card from '@/components/Card';
import { MdAdd } from 'react-icons/md';
import Loading from '@/components/Loading';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from 'axios';


const Dashboard = () =>
{
    const { user, setUser, signOut } = UserAuth();
    const [notes, setNotes] = React.useState([]);
    useEffect(() =>
    {
        localStorage.getItem('user') && setUser(JSON.parse(localStorage.getItem('user')));
        const fetchData = async () =>
        {
            if (user)
            {
                const res = await axios.get(`https://hack-o-rama.onrender.com/get-notes/${user.uid}`);
                const data = await res.json();
                setNotes(data);
            }
        };
        fetchData();

        console.log(user);
    }, []);

    return (
        <>
            {
                user ?
                    <main className='conatiner flex bg-gray-100 h-screen'>
                        < Sidebar />
                        <div className="w-5/6 overflow-y-scroll ">
                            <div className="px-6">
                                <Navbar />
                                {/* Heading Section */}
                                <Header />
                                {/* Notes Section */}
                            </div>
                            <div className="notes px-6 py-4  mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                                {/* Add New Note */}
                                <div className=" cursor-pointer note-card flex items-center justify-center bg-white rounded-lg shadow-md flex-col p-4">
                                    <div className="border-2 flex items-center justify-center border-dashed border-blue-400 rounded-full h-32 w-32">
                                        <MdAdd className='text-3xl' />
                                    </div>
                                    <p className='text-blue-400 font-medium mt-4'>Add Note</p>
                                </div>
                                {/* {
                                    notes.map((note) =>
                                    {
                                        return <Card key={note.id} id={note._id} category={note.category} title={note.title} content={note.content} timestamp={note.timestamp} displayName={user.displayName} />;
                                    })
                                } */}
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />


                            </div>

                            <Footer />
                        </div>
                    </main >
                    :
                    <Loading />

            }
        </>
    );
};

export default Dashboard


