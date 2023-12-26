"use client"; // this registers <Editor> as a Client Component
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import * as Y from "yjs";
import { WebsocketProvider } from 'y-websocket';
import { getRandomUser } from "@/utils/randomuser";
import publicUrl from '@/utils/publicUrl';
import React, { useEffect } from "react";
import axios from "axios";
import { initialData } from "@/constants/data";

// Our <Editor> component we can reuse later
export default function Editor({ data, id }) {
    console.log("data", data);

    // console.log("id", id);
    const initData = data.map((block) => {
        return {
            id: `${block.id}`,
            type: `${block.type}`,
            content: `${block.content}`
        };
    });
    console.log("initData", initData);
    // Creates a new editor instance.
    // const [note, setNote] = React.useState();
    const doc = new Y.Doc();
    const provider = new WebsocketProvider('ws://localhost:1234', `room-${id}`, doc);
    const editor = useBlockNote({
        // initialContent: initData,
        collaboration: {
            provider,
            // Where to store BlockNote data in the Y.Doc:
            fragment: doc.getXmlFragment("document-store"),
            // Information (name and color) for this user:
            user: getRandomUser(),
        },
        onEditorContentChange: (editor) => {
            // setNote(editor.topLevelBlocks);
            return;
        }        // ...
    });

    const handleSave = async () => {
        // const note = localStorage.getItem("editorContent");
        const res = axios.post(`${publicUrl()}/note/${id}`, {
            content: editor.topLevelBlocks,
        });
        // console.log(note);
        console.log("saved");
    };



    // Renders the editor instance using a React component.
    return (
        <div className="w-screen">

            <div>
                <BlockNoteView editor={editor} theme={"light"} />
            </div >
        </div >);
};