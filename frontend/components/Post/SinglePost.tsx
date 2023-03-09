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

    const handleDelete = () => {
        fetch(`/api/post/${post.id}`, {
            method: "DELETE",
        }).then(() => {
            deletePost(post.id);
        });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.rating}>{ratings.map(star => star)}</p>
            <p className={styles.text}>{post.text}</p>
            <p
                className={
                    styles.percentage
                }>{`${post.coffee.name} - ${post.coffee.caffeine_percentage} mg per oz`}</p>
            <button onClick={handleDelete} className={`${btn.style} ${styles.deleteBtn}`}>
                X
            </button>
        </div>
    );
}

export default SinglePost;
