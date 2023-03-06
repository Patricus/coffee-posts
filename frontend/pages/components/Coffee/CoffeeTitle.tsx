import React from "react";
import NewCoffee from "./NewCoffee";
import styles from "../../../styles/Coffees.module.css";

function CoffeeTitle() {
    const [modal, setModal] = React.useState(false);

    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>Coffees</h2>
            <button
                className={styles.newButton}
                onClick={() => {
                    setModal(modal => !modal);
                }}>
                New Coffee
            </button>
            {modal && (
                <>
                    <NewCoffee />
                    <p>modal</p>
                </>
            )}
        </div>
    );
}

export default CoffeeTitle;
