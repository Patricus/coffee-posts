import React from "react";
import { useCoffee } from "../Context/Coffee";
import CoffeeTitle from "./CoffeeTitle";
import SingleCoffee from "./SingleCoffee";
import styles from "../../styles/Coffees.module.css";

function Coffees() {
    const { coffees, setCoffees } = useCoffee();

    React.useEffect(() => {
        fetch("/api/coffee")
            .then(res => res.json())
            .then(data => {
                setCoffees(data);
            });
    }, [setCoffees]);

    return (
        <section className={styles.main}>
            <CoffeeTitle />
            {coffees.length ? (
                coffees.map((coffee: any) => <SingleCoffee key={coffee.id} coffee={coffee} />)
            ) : (
                <h3>No Coffees</h3>
            )}
        </section>
    );
}

export default Coffees;
