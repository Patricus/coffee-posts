import React from "react";
import styles from "../../styles/NewCoffee.module.css";
import btn from "../../styles/Button.module.css";

function NewCoffee({ addCoffee, setModal }: { addCoffee: any; setModal: any }) {
    const [name, setName] = React.useState("");
    const [year, setYear] = React.useState("");
    const [caffeine, setCaffeine] = React.useState("");

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch("/api/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                year,
                caffeine_content: caffeine,
            }),
        });
        if (res.ok) {
            setModal(false);
            const data = await res.json();
            addCoffee(data);
        }
    };

    return (
        <section className={styles.modal}>
            <h2 className={styles.title}>New Coffee</h2>
            <form onSubmit={submit} className={styles.form}>
                <label htmlFor="name" className={styles.label}>
                    Name:
                    <input
                        id="name"
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="year" className={styles.label}>
                    Year:
                    <input
                        id="year"
                        className={styles.input}
                        type="text"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                    />
                </label>
                <label htmlFor="caffeine" className={styles.label}>
                    Caffeine:
                    <input
                        id="caffeine"
                        className={styles.input}
                        type="text"
                        value={caffeine}
                        onChange={e => setCaffeine(e.target.value)}
                    />
                </label>
                <button className={btn.style}>Submit</button>
            </form>
        </section>
    );
}

export default NewCoffee;
