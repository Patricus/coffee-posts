import React from "react";
import { usePost } from "../Context/Post";
import PostTitle from "./PostTitle";
import SinglePost from "./SinglePost";
import styles from "../../styles/Posts.module.css";

function Posts() {
    const { posts } = usePost();

    return (
        <section className={styles.main}>
            <PostTitle />
            {posts.length ? (
                posts.map((post: any) => <SinglePost key={post.id} {...post} />)
            ) : (
                <h2 style={{ textAlign: "center" }}>No Posts</h2>
            )}
        </section>
    );
}

export default Posts;
