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
            const res = await axios.get(`${publicUrl()}/note/${id}`);
            // console.log("Res", res);

            const data = await res.data;
            console.log(data);
            data && setInitData(data[0].content);
            console.log(data);
        };
        fetchData();
    }, []);
    return (
        <div className="">

            {initData && <Editor data={initData} id={id} />}

        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    };
}

export default Edit;

