"use client"; // this registers <Editor> as a Client Component
import { getRandomUser } from "@/utils/randomuser";
import Link from 'next/link';
import { MdEdit, MdSave } from 'react-icons/md';
import publicUrl from '@/utils/publicUrl';
import React, { useEffect } from "react";
import axios from "axios";
import EditorSidebar from "./EditorSidebar";
import EditorInfo from "./EditorInfo";
import EditorNav from "./EditorNav";
import YPartyKitProvider from "y-partykit/provider";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import * as Y from "yjs";
import { WebsocketProvider } from 'y-websocket';
import { WebrtcProvider } from "y-webrtc";


// Our <Editor> component we can reuse later
export default function Editor({ data, id })
{
    //content is the doc where docId == id
    const content = data.content;
    const initData = content.map((block) =>
    {
        return {
            id: `${block.id}`,
            type: `${block.type}`,
            props: undefined,
            content: `${block.content}`,
            children: undefined,
        };
    });
    // console.log("initData", initData);
    const doc = new Y.Doc();
    // const provider = new WebsocketProvider(`wss://websocket-im9l.onrender.com`, `room-${id}`, doc);
    // const provider = new WebrtcProvider(`room-${id}`, doc);
    // const provider = new WebrtcProvider(`room-${id}`, doc, {

    // });

    const provider = new YPartyKitProvider("https://frontend-party.techymt.partykit.dev", `room-${id}`, doc);

    console.log("status", provider.awareness);
    provider.on('synced', synced =>
    {
        // NOTE: This is only called when a different browser connects to this client
        // Windows of the same browser communicate directly with each other
        // Although this behavior might be subject to change.
        // It is better not to expect a synced event when using y-webrtc
        console.log('synced!', synced);
    });


    const editor = useBlockNote({
        initialContent: initData,
        collaboration: {
            provider,
            // Where to store BlockNote data in the Y.Doc:
            fragment: doc.getXmlFragment("document-store"),
            // Information (name and color) for this user:
            user: getRandomUser(),
        },
        onEditorContentChange: (editor) =>
        {
            localStorage.setItem("item", JSON.stringify(editor.topLevelBlocks));
        }
    });

    const handleSave = async () =>
    {
        // const note = localStorage.getItem("editorContent");
        const res = axios.put(`${publicUrl()}/note/${id}`, {
            content: editor.topLevelBlocks,
        });
        // console.log(note);
        console.log("saved");
        console.log(editor.topLevelBlocks);
    };



    // Renders the editor instance using a React component.
    return (
        <div>
            <EditorNav handleSave={handleSave} />
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