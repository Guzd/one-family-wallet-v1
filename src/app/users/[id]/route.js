import {users} from "../route"

export async function GET(request, { params }) {
    const {id} = await params;

    console.log("the id", id);
    
    const user = users.find((user) => {
        return user.id === parseInt(id);
    })

    return Response.json(user);
}