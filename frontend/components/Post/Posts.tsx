import React from "react";
import { usePost } from "../Context/Post";
import { useCoffee } from "../Context/Coffee";
import PostTitle from "./PostTitle";
import SinglePost from "./SinglePost";
import styles from "../../styles/Posts.module.css";

function Posts() {
    const [order, setOrder] = React.useState("asc");

    const { posts, setPosts } = usePost();
    const { coffees } = useCoffee();

    React.useEffect(() => {
        fetch(`/api/post?order=${order}`)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [setPosts, order, coffees]);

    return (
        <section className={styles.main}>
            <PostTitle order={order} setOrder={setOrder} />
            {posts.length ? (
                posts.map((post: any) => <SinglePost key={post.id} {...post} />)
            ) : (
                <h2 style={{ textAlign: "center" }}>No Posts</h2>
            )}
        </section>
    );
}

export default Posts;
