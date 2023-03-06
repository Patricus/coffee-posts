import React from "react";
import CoffeeTitle from "./CoffeeTitle";
import SingleCoffee from "./SingleCoffee";
import { createContext } from "react";
import styles from "../../../styles/Coffees.module.css";

interface Coffee {
    id: number;
    name: string;
    year: number;
    caffeine_content: number;
    caffeine_percentage: number;
    created_at: string;
    updated_at: string;
}

function Coffees() {
    const [coffees, setCoffees] = React.useState<Coffee[]>([]);

    const addCoffee = (coffee: any) => {
        setCoffees(coffees => [...coffees, coffee]);
    };

    const deleteCoffee = (id: number) => {
        setCoffees(coffees => coffees.filter(coffee => coffee.id !== id));
    };

    React.useEffect(() => {
        fetch("/api/coffee")
            .then(res => res.json())
            .then(data => setCoffees(data));
    }, [setCoffees]);

    return (
        <section className={styles.main}>
            <CoffeeTitle addCoffee={addCoffee} />
            {coffees.length &&
                coffees.map((coffee: any) => (
                    <SingleCoffee key={coffee.id} coffee={coffee} deleteCoffee={deleteCoffee} />
                ))}
        </section>
    );
}

export default Coffees;
