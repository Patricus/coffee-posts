import React from "react";
import { usePost } from "../Context/Post";
import { useCoffee } from "../Context/Coffee";
import styles from "../../../styles/NewPost.module.css";
import btn from "../../../styles/Button.module.css";

function NewPost({ setModal }: { setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [title, setTitle] = React.useState("");
    const [rating, setRating] = React.useState(3);
    const [coffeeId, setCoffeeId] = React.useState(1);
    const [text, setText] = React.useState("");

    const { addPost } = usePost();
    const { coffees } = useCoffee();

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                rating,
                coffee_id: coffeeId,
                text,
            }),
        });
        if (res.ok) {
            const post = await res.json();
            post.coffee = coffees.find(coffee => coffee.id === coffeeId);
            addPost(post);
            setModal(false);
        }
    };

    return (
        <section
            className={styles.modalBackground}
            onClick={() => {
                setModal(false);
            }}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <h2 className={styles.title}>Create Post</h2>
                <form className={styles.form} onSubmit={submit}>
                    <label htmlFor="title" className={styles.label}>
                        Title:
                        <input
                            id="title"
                            className={styles.input}
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </label>
                    <div>
                        <label htmlFor="rating">
                            Rating:
                            <select
                                name="rating"
                                id="rating"
                                value={rating}
                                onChange={e => setRating(parseInt(e.target.value))}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </label>
                        <label htmlFor="coffee">
                            Coffee:
                            <select
                                name="coffee"
                                id="coffee"
                                value={coffeeId}
                                onChange={e => setCoffeeId(parseInt(e.target.value))}>
                                {coffees.map((coffee: any) => (
                                    <option key={coffee.id} value={coffee.id}>
                                        {coffee.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <label htmlFor="text" className={styles.label}>
                        Text:
                        <textarea
                            id="text"
                            className={styles.textarea}
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                    </label>
                    <button className={btn.style}>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default NewPost;
