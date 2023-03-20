import React from "react";
import styles from "../../styles/NewCoffee.module.css";
import btn from "../../styles/Button.module.css";
import { useCoffee } from "../Context/Coffee";

function EditCoffee({ coffee, setModal }: { coffee: any; setModal: any }) {
    const [name, setName] = React.useState(coffee.name);
    const [year, setYear] = React.useState(coffee.year);
    const [caffeine, setCaffeine] = React.useState(coffee.caffeine_content);

    const { editCoffee } = useCoffee();

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(`/api/coffee/${coffee.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: coffee.id,
                name,
                year,
                caffeine_content: caffeine,
            }),
        });
        if (res.ok) {
            setModal(false);
            const data = await res.json();
            editCoffee(data);
        }
    };

    return (
        <section className={styles.modal}>
            <h2 className={styles.title}>Edit Coffee</h2>
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
                <div>
                    <button onClick={() => setModal(false)} className={btn.style}>
                        Cancel
                    </button>
                    <button className={btn.style}>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default EditCoffee;
