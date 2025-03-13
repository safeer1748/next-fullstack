export interface postProps {
    id: string;
    title: string;
    desc: string;
    date: string;
}
let posts: postProps[] = []

//handlers
export const getPosts = () => posts

export const addPost = (post: postProps) => posts.push(post)

export const deletePost = (id: string) => posts = posts.filter(post => post.id !== id)

export const updatePost = (id: string, title: string, desc: string) => {
    const post = posts.find((post) => post.id === id)
    if (post) {
        post.title = title
        post.desc = desc
    } else {
        console.log("post not found")
    }
}
export const getbyId = (id: string) => {
    return posts.find((post) => post.id === id)
}