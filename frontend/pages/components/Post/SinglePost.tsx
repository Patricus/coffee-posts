import React from "react";
import styles from "../../../styles/SinglePost.module.css";

function SinglePost(post: any) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.rating}>{post.rating}</p>
            <p className={styles.text}>{post.text}</p>
            <p className={styles.percentage}>{`Caffine Percentage`}</p>
        </div>
    );
}

export default SinglePost;
