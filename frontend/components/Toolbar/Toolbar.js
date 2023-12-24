import styles from "./Toolbar.module.css";
import { QuillEditorType } from "@/components/CollaborativeEditor";
import { useCallback } from "react";



export default function Toolbar({ getQuill })
{
    const formatSelection = useCallback(
        (format) =>
        {
            const quill = getQuill();
            if (!quill)
            {
                return;
            }

            const selection = quill.getSelection();
            if (!selection)
            {
                return;
            }

            const { index, length } = selection;
            const hasFormat = quill.getFormat(index, length)[format];

            quill.formatText(
                index,
                length,
                {
                    [format]: !hasFormat,
                },
                "user"
            );
        },
        [getQuill]
    );

    return (
        <div className={styles.toolbar}>
            <button
                className={styles.button}
                onClick={() => formatSelection("bold")}
                aria-label="bold"
            >
                B
            </button>
            <button
                onClick={() => formatSelection("italic")}
                className={styles.button}
                aria-label="italic"
            >
                I
            </button>
            <button
                onClick={() => formatSelection("underline")}
                className={styles.button}
                aria-label="underline"
            >
                U
            </button>
        </div>
    );
}