import React from "react";
import { usePost } from "../Context/Post";
import styles from "../../styles/SinglePost.module.css";
import btn from "../../styles/Button.module.css";

function SinglePost(post: any) {
    const { deletePost } = usePost();

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
            <span className={styles.buttons}>
                <button className={btn.style}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => deletePost(post.id)} className={btn.style}>
                    <i className="fa-solid fa-x"></i>
                </button>
            </span>
        </div>
    );
}

export default SinglePost;
