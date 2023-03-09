import React from "react";
import { usePost } from "../Context/Post";
import PostTitle from "./PostTitle";
import SinglePost from "./SinglePost";
import styles from "../../styles/Posts.module.css";

function Posts() {
    const [order, setOrder] = React.useState("asc");

    const { posts, setPosts } = usePost();

    React.useEffect(() => {
        fetch(`/api/post?order=${order}`)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [setPosts, order]);

    return (
        <section className={styles.main}>
            <PostTitle order={order} setOrder={setOrder} />
            {posts.length && posts.map((post: any) => <SinglePost key={post.id} {...post} />)}
        </section>
    );
}

export default Posts;
