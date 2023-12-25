"use client"; // this registers <Editor> as a Client Component
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import * as Y from "yjs";
import { WebsocketProvider } from 'y-websocket';
import { getRandomUser } from "@/utils/randomuser";
import React, { useEffect } from "react";
import { initialData } from "@/constants/data";

// Our <Editor> component we can reuse later
export default function Editor({ data, id })
{
    console.log("data", data);
console.log("id", id);
    const initData = data.map((block) =>
    {
        return {
            type: `${block.type}`,
            content: `${block.content}`
        };
    });
    console.log("initData", initData);
    // Creates a new editor instance.
    const [note, setNote] = React.useState();
    const doc = new Y.Doc();
    const provider = new WebsocketProvider('ws://localhost:1234', 'my-roomname', doc);
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

            setNote(editor.topLevelBlocks);
        }        // ...
    });

    const handleSave = async () =>
    {
        // const note = localStorage.getItem("editorContent");
        // const res = axios.post(`${publicUrl()}/note`);
        console.log(note);
        console.log("saved");
    };



    // Renders the editor instance using a React component.
    return (<div>

        <div>
            <button onClick={handleSave}>
                Save
            </button>

        </div>

        <div >
            <BlockNoteView editor={editor} theme={"light"} />
        </div>
    </div>);
};