'use client';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { initialData } from "@/constants/data";
import React from "react";
import axios from "axios";
import publicUrl from "@/utils/publicUrl";
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

function Edit()
{
    const [initData, setInitData] = React.useState(null);
    const [id, setId] = React.useState(null);

    useEffect(() =>
    {

        const fetchData = async () =>
        {
            const res = await axios.get(`${publicUrl()}/note/123456798`);

            const data = await res.data;
            const id = data[0].docId;
            setId(id);
            setInitData(data[0].content);
        };
        fetchData();
    }, []);
    return (
        <div className="p-12">
            <div className="flex">
                <div>
                    <Editor data={initData} id={id} />
                </div>
            </div>
        </div>
    );
}

export default Edit;