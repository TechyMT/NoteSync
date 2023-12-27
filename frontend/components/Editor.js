"use client"; // this registers <Editor> as a Client Component
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import * as Y from "yjs";
import { WebsocketProvider } from 'y-websocket';
import { getRandomUser } from "@/utils/randomuser";
import Link from 'next/link'
import { MdEdit, MdSave } from 'react-icons/md'
import publicUrl from '@/utils/publicUrl';
import React from "react";
import axios from "axios";
import EditorSidebar from "./EditorSidebar";
import EditorInfo from "./EditorInfo";


// Our <Editor> component we can reuse later
export default function Editor({ data, id }) {
    console.log("data,", data);

    //content is the doc where docId == id
    const content = data.content;

    const initData = content.map((block) => {
        return {
            id: `${block.id}`,
            type: `${block.type}`,
            content: `${block.content}`
        };
    });
    // console.log("initData", initData);
    const doc = new Y.Doc();
    const provider = new WebsocketProvider(`ws://localhost:1234`, `room-${id}`, doc);



    const editor = useBlockNote({
        initialContent: initData,
        collaboration: {
            provider,
            // Where to store BlockNote data in the Y.Doc:
            fragment: doc.getXmlFragment("document-store"),
            // Information (name and color) for this user:
            user: getRandomUser(),
        },
        onEditorContentChange: (editor) => {
            //To handkle changes
            console.log(provider)
            return;
        }
    });

    const handleSave = async () => {
        // const note = localStorage.getItem("editorContent");
        const res = axios.put(`${publicUrl()}/note/${id}`, {
            content: editor.topLevelBlocks,
        });
        // console.log(note);
        console.log("saved");
        console.log(editor.topLevelBlocks)
    };



    // Renders the editor instance using a React component.
    return (
        <div>
            <div className="fixed w-full shadow bg-white z-50">
                <div className="flex z-50 mx-auto  max-w-screen-xl  justify-between items-center  header fle">
                    <Link href='/dashboard'>
                        <div className="logo    px-4 py-3 flex items-center">
                            <img src='/applogo-tp.png' className='w-10 h-10' />
                            <div className="text-slate-900 font-bold text-2xl -ml-2">oteSync</div>
                        </div>
                    </Link>
                    <div onClick={handleSave} className=" h-10 rounded-full flex items-center justify-center gap-3 border-2 border-blue-500 active:bg-blue-200 px-2 py-1 cursor-pointer">
                        <MdSave className='text-xl text-gray-700' />
                        <span>Save</span>
                    </div>
                </div>
            </div>
            <div className="flex">
                <EditorSidebar active={data.docId} />
                <div className="w-8/12 ">
                    <div className="conatiner  mx-auto py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
                        <BlockNoteView editor={editor} theme={"light"} />
                    </div>
                </div>
                <EditorInfo tags={data.tags} category={data.category} />
            </div>
        </div>
    );
};