import React from "react";

interface Post {
    id: number;
    title: string;
    text: string;
    created_at: string;
    updated_at: string;
}

const PostContext = React.createContext({
    posts: [] as Post[],
    setPosts: (posts: Post[]) => {},
    addPost: (post: Post) => {},
    editPost: (post: Post) => {},
    deletePost: (id: number) => {},
});

export const PostProvider = ({ children }: { children: any }) => {
    const [posts, setPosts] = React.useState<Post[]>([]);

    const addPost = (post: Post) => {
        setPosts(posts => [...posts, post]);
    };

    const editPost = (post: Post) => {
        setPosts(posts => posts.map(p => (p.id === post.id ? post : p)));
    };

    const deletePost = (id: number) => {
        fetch(`/api/post/${id}`, {
            method: "DELETE",
        }).then(() => {
            setPosts(posts => posts.filter(post => post.id !== id));
        });
    };

    return (
        <PostContext.Provider value={{ posts, setPosts, addPost, editPost, deletePost }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => React.useContext(PostContext);
