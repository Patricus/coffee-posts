import React from "react";
import styles from "../../../styles/Coffees.module.css";

function CoffeeTitle() {
    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>Coffees</h2>
            <button className={styles.newButton}>New Coffee</button>
        </div>
    );
}

export default CoffeeTitle;
