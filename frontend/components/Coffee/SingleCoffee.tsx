import React from "react";
import { useCoffee } from "../Context/Coffee";
import styles from "../../styles/SingleCoffee.module.css";
import btn from "../../styles/Button.module.css";
import EditCoffee from "./EditCoffee";

function SingleCoffee({ coffee }: { coffee: any }) {
    const [modal, setModal] = React.useState(false);
    const { deleteCoffee } = useCoffee();

    return (
        <>
            {modal && <EditCoffee coffee={coffee} setModal={setModal} />}
            <div className={styles.container}>
                <h2 className={styles.icon}>
                    <i className="fa-solid fa-mug-hot"></i>
                </h2>
                <p className={styles.nameYear}>
                    {coffee.name} - {coffee.year}
                </p>
                <span className={styles.buttons}>
                    <button onClick={() => setModal(true)} className={btn.style}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => deleteCoffee(coffee.id)} className={btn.style}>
                        <i className="fa-solid fa-x"></i>
                    </button>
                </span>
            </div>
        </>
    );
}

export default SingleCoffee;
