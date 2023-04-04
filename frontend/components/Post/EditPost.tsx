import React from "react";
import { usePost } from "../Context/Post";
import { useCoffee } from "../Context/Coffee";
import styles from "../../styles/NewPost.module.css";
import btn from "../../styles/Button.module.css";

interface Post {
    id: number;
    title: string;
    text: string;
    rating: number;
    coffee_id: number;
    created_at: string;
    updated_at: string;
}

function EditPost({
    setModal,
    post,
}: {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    post: Post;
}) {
    const [title, setTitle] = React.useState(post.title);
    const [rating, setRating] = React.useState(post.rating);
    const [coffeeId, setCoffeeId] = React.useState(post.coffee_id);
    const [text, setText] = React.useState(post.text);

    const { editPost } = usePost();
    const { coffees } = useCoffee();

    if (!coffees.length)
        return (
            <section className={styles.modalBackground} onClick={() => setModal(false)}>
                <div className={styles.modal} onClick={e => e.stopPropagation()}>
                    <h2 className={styles.title}>Error No Coffees</h2>
                    <p className={styles.text}>This post shouldn&apos;t exist without coffees.</p>
                    <button className={btn.style} onClick={() => setModal(false)}>
                        Close
                    </button>
                </div>
            </section>
        );

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch(`/api/post/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: post.id,
                title,
                rating,
                coffee_id: coffeeId,
                text,
            }),
        });
        if (res.ok) {
            const post = await res.json();
            post.coffee = coffees.find(coffee => {
                return coffee.id === coffeeId;
            });
            editPost(post);
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
                        <input
                            id="title"
                            className={styles.input}
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </label>
                    <div className={styles.ratingCoffee}>
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
                        <textarea
                            id="text"
                            placeholder="Post text"
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

export default EditPost;
