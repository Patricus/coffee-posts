import React from "react";
import styles from "../../../styles/Posts.module.css";

function PostTitle() {
    const [order, setOrder] = React.useState("asc");
    return (
        <div className={styles.postContainer}>
            <h2 className={styles.title}>Posts</h2>
            <button className={styles.newButton}>New Post</button>
            <select
                className={styles.order}
                name="order"
                id="order"
                value={order}
                onChange={e => setOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
}

export default PostTitle;
