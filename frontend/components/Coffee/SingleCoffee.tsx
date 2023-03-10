import React from "react";
import { useCoffee } from "../Context/Coffee";
import styles from "../../styles/SingleCoffee.module.css";
import btn from "../../styles/Button.module.css";

function SingleCoffee({ coffee }: { coffee: any }) {
    const { deleteCoffee } = useCoffee();

    return (
        <div className={styles.container}>
            <h2 className={styles.icon}>
                <i className="fa-solid fa-mug-hot"></i>
            </h2>
            <p className={styles.nameYear}>
                {coffee.name} - {coffee.year}
            </p>
            <button
                onClick={() => deleteCoffee(coffee.id)}
                className={`${btn.style} ${styles.deleteBtn}`}>
                X
            </button>
        </div>
    );
}

export default SingleCoffee;
