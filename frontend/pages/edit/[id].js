'use client';
import axios from "axios";
import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { initialData } from "@/constants/data";
import publicUrl from "@/utils/publicUrl";
import { useRouter } from "next/router";
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

function Edit() {
    const [initData, setInitData] = React.useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${publicUrl()}/note/123456798`);
            const data = await res.data;

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

