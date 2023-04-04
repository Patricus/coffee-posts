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
    order: "asc" as string,
    setOrder: (order: string) => {},
});

export const PostProvider = ({ children }: { children: any }) => {
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [order, setOrder] = React.useState<string>("asc");

    React.useEffect(() => {
        fetch(`/api/post?order="asc"`)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [setPosts]);

    React.useEffect(() => {
        const reverse = [...posts].reverse();
        setPosts(reverse);
    }, [order]);

    const addPost = (post: Post) => {
        const newPosts = [...posts, post].sort((a: Post, b: Post) => {
            if (order === "asc") {
                return a.title < b.title ? -1 : 1;
            } else {
                return a.title > b.title ? -1 : 1;
            }
        });

        setPosts(newPosts);
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
        <PostContext.Provider
            value={{ posts, setPosts, addPost, editPost, deletePost, order, setOrder }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => React.useContext(PostContext);
