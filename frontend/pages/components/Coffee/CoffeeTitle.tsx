import React from "react";
import { useCoffee } from "../../components/Context/Coffee";
import NewCoffee from "./NewCoffee";
import styles from "../../../styles/Coffees.module.css";
import btn from "../../../styles/Button.module.css";

function CoffeeTitle() {
    const [modal, setModal] = React.useState(false);

    const { addCoffee } = useCoffee();

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
