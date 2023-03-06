import React from "react";
import styles from "../../../styles/SingleCoffee.module.css";

function SingleCoffee(coffee: any) {
    return (
        <div className={styles.container}>
            <h2 className={styles.icon}>C</h2>
            <p className={styles.nameYear}>
                {coffee.name} - {coffee.year}
            </p>
        </div>
    );
}

export default SingleCoffee;
