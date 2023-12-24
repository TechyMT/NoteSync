import { Liveblocks } from "@liveblocks/node";

const API_KEY = "sk_dev_c5ts21S_MRIuPquTIEB-qfWRxQ3APCfhSxCIrY_0xYFXIVYoRYhOLgPlXUE1GKwt";

const liveblocks = new Liveblocks({
    secret: process.env("API_KEY"),
});

export default async function handler(
    request,
    response
)
{
    // Get the current user's info from your database
    const user = {
        id: "charlielayne@example.com",
        info: {
            name: "Ayush",
            color: "#D583F0",
            picture: "https://liveblocks.io/avatars/avatar-1.png",
        },
    };

    // Create a session for the current user
    // userInfo is made available in Liveblocks presence hooks, e.g. useOthers
    const session = liveblocks.prepareSession(user.id, {
        userInfo: user.info,
    });

    // Give the user access to the room
    const { room } = request.body;
    session.allow(room, session.FULL_ACCESS);

    // Authorize the user and return the result
    const { status, body } = await session.authorize();
    response.status(status).send(body);
}