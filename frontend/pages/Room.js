"use client";

import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

export function Room({ children })
{
    return (
        <RoomProvider
            id={roomId}
            initialPresence={{
                cursor: null,
            }}
        >
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    );
}