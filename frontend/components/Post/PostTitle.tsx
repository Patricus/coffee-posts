import React from "react";
import NewPost from "./NewPost";
import SearchBar from "./SearchBar";
import styles from "../../styles/Posts.module.css";
import btn from "../../styles/Button.module.css";

function PostTitle({ order, setOrder }: { order: string; setOrder: (order: string) => void }) {
    const [modal, setModal] = React.useState(false);

    return (
        <div className={styles.postContainer}>
            <h2 className={styles.title}>Posts</h2>
            <button className={btn.style} onClick={() => setModal(modal => !modal)}>
                New Post
            </button>
            <SearchBar order={order} setOrder={setOrder} />
            <select
                className={styles.order}
                name="order"
                id="order"
                value={order}
                onChange={e => setOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            {modal && <NewPost setModal={setModal} />}
        </div>
    );
}

export default PostTitle;
