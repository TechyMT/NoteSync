import { useSelf } from "../liveblocks.config.ts";
// ...

Quill.register("modules/cursors", QuillCursors);

// ...

function QuillEditor({ yText, provider })
{
    // Add user info to cursors from Liveblocks authentication endpoint
    const userInfo = useSelf((me) => me.info);
    useEffect(() =>
    {
        const { name, color } = userInfo;
        provider.awareness.setLocalStateField("user", {
            name,
            color,
        });
    }, [userInfo]);

    // ...

    return (
        <div className={styles.container}>
            <div className={styles.editorContainer}>
                <ReactQuill
                    className={styles.editor}
                    placeholder="Start typing here…"
                    ref={reactQuillRef}
                    theme="snow"
                    modules={{
                        cursors: true,
                        toolbar: false,
                        history: {
                            // Local undo shouldn't undo changes from remote users
                            userOnly: true,
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default QuillEditor;