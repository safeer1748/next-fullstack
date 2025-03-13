import { NextResponse } from "next/server"
import { addPost, getPosts, postProps } from "../../../../database"
export const GET = async () => {
    try {
        const posts = getPosts()
        return NextResponse.json({ message: "OK", posts }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "ERROR", error }, { status: 500 })
    }
}
export const POST = async (req: Request) => {
    try {
        const { title, desc } = await req.json()
        const post: postProps = { title, desc, date: new Date().toISOString(), id: Date.now().toString() }
        addPost(post)
        return NextResponse.json({ message: "OK", post }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "ERROR", error }, { status: 500 })
    }
}

