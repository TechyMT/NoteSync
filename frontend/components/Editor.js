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

// Our <Editor> component we can reuse later
export default function Editor({ data, id }) {
    console.log("data", data);

    const initData = data.map((block) => {
        return {
            id: `${block.id}`,
            type: `${block.type}`,
            content: `${block.content}`
        };
    });
    // console.log("initData", initData);
    // Creates a new editor instance.
    // const [note, setNote] = React.useState();
    const doc = new Y.Doc();
    const provider = new WebsocketProvider(`ws://${process.env.WEB_SOCKET_URL}`, `room-${id}`, doc);
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
            git
            // setNote(editor.topLevelBlocks);
            console.log()
            return;
        }        // ...
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
                <div className="w-2/12 border-r border-gray-200"></div>
                <div className="w-8/12">
                    <div className="conatiner  mx-auto py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
                        <BlockNoteView editor={editor} theme={"light"} />
                    </div>
                </div>
                <div className="w-2/12 pt-20 p-4 border-l border-gray-200">
                    <h2 className="font-medium">Tags</h2>
                    <div className="flex gap-2 py-2">

                        <span class="bg-indigo-200 text- text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  ">Indigo</span>
                        <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-100">Dark</span>
                    </div>

                </div>
            </div>
        </div>
    );
};