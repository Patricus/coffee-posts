import React from "react";
import PostTitle from "./PostTitle";
import SinglePost from "./SinglePost";
import styles from "../../../styles/Posts.module.css";

function Posts() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/post")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [setPosts]);

    return (
        <section className={styles.main}>
            <PostTitle />
            {posts.length && posts.map((post: any) => <SinglePost key={post.id} {...post} />)}
        </section>
    );
}

export default Posts;
