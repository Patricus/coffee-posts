import React from "react";
import styles from "../../../styles/SinglePost.module.css";

function SinglePost(post: any) {
    const ratings: JSX.Element[] = [];
    for (let i = 0; i < post.rating; i++) {
        ratings.push(
            <span key={i}>
                <i className="fa-solid fa-star"></i>
            </span>
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.rating}>{ratings.map(star => star)}</p>
            <p className={styles.text}>{post.text}</p>
            <p
                className={
                    styles.percentage
                }>{`${post.coffee.name} - ${post.coffee.caffeine_percentage} mg per oz`}</p>
        </div>
    );
}

export default SinglePost;
