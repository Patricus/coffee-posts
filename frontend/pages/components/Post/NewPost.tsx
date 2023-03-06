import React from "react";
import styles from "../../../styles/NewPost.module.css";

function NewPost({ setModal }: { setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <section className={styles.modalBackground} onClick={() => setModal(false)}>
            <div className={styles.modal}>
                <h2 className={styles.title}>New Post</h2>
            </div>
        </section>
    );
}

export default NewPost;
