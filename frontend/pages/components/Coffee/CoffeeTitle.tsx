import React from "react";
import NewCoffee from "./NewCoffee";
import styles from "../../../styles/Coffees.module.css";
import btn from "../../../styles/Button.module.css";

function CoffeeTitle({ addCoffee }: { addCoffee: any }) {
    const [modal, setModal] = React.useState(false);

    return (
        <>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Coffees</h2>
                <button
                    className={btn.style}
                    onClick={() => {
                        setModal(modal => !modal);
                    }}>
                    New Coffee
                </button>
            </div>
            {modal && (
                <>
                    <NewCoffee addCoffee={addCoffee} setModal={setModal} />
                </>
            )}
        </>
    );
}

export default CoffeeTitle;
