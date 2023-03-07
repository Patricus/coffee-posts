import React from "react";

interface Coffee {
    id: number;
    name: string;
    year: number;
    caffeine_content: number;
    caffeine_percentage: number;
    created_at: string;
    updated_at: string;
}

const CoffeeContext = React.createContext({
    coffees: [] as Coffee[],
    setCoffees: (coffees: Coffee[]) => {},
    addCoffee: (coffee: Coffee) => {},
    deleteCoffee: (id: number) => {},
});

export const CoffeeProvider = ({ children }: { children: any }) => {
    const [coffees, setCoffees] = React.useState<Coffee[]>([]);

    const addCoffee = (coffee: Coffee) => {
        setCoffees(coffees => [...coffees, coffee]);
    };

    const deleteCoffee = (id: number) => {
        setCoffees(coffees => coffees.filter(coffee => coffee.id !== id));
    };

    return (
        <CoffeeContext.Provider value={{ coffees, setCoffees, addCoffee, deleteCoffee }}>
            {children}
        </CoffeeContext.Provider>
    );
};

export const useCoffee = () => React.useContext(CoffeeContext);
