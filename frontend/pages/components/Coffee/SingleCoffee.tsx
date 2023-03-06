import React from "react";
import styles from "../../../styles/SingleCoffee.module.css";
import btn from "../../../styles/Button.module.css";

function SingleCoffee({
    coffee,
    deleteCoffee,
}: {
    coffee: any;
    deleteCoffee: (id: number) => void;
}) {
    const handleDelete = () => {
        fetch(`/api/coffee/${coffee.id}`, {
            method: "DELETE",
        }).then(() => deleteCoffee(coffee.id));
    };
    return (
        <div className={styles.container}>
            <h2 className={styles.icon}>C</h2>
            <p className={styles.nameYear}>
                {coffee.name} - {coffee.year}
            </p>
            <button onClick={handleDelete} className={`${btn.style} ${styles.deleteBtn}`}>
                X
            </button>
        </div>
    );
}

export default SingleCoffee;
