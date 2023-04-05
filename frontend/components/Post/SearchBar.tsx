import React from "react";
import { usePost } from "../Context/Post";
import styles from "../../styles/Searchbar.module.css";

interface Coffee {
    id: number;
    name: string;
    year: number;
    caffeine_content: number;
    caffeine_percentage: number;
    created_at: Date;
    updated_at: Date;
}

function SearchBar() {
    const [search, setSearch] = React.useState("");
    const [dropdown, setDropdown] = React.useState<Coffee[]>([]);

    const { setPosts, order, setOrder } = usePost();

    const handleSearch = (itemName: string) => {
        setSearch(itemName);
        fetch(`/api/post/coffee/${itemName}?order=${order}`)
            .then(res => res.json())
            .then(data => setPosts(data));
    };

    const clearSearch = () => {
        setSearch("");
        setDropdown([]);
        fetch(`api/post?order=${order}`)
            .then(res => res.json())
            .then(data =>
                data.sort((a: Coffee, b: Coffee) => {
                    if (order === "asc") {
                        return a.name < b.name ? -1 : 1;
                    } else {
                        return a.name > b.name ? -1 : 1;
                    }
                })
            )
            .then(data => setPosts(data));
    };

    const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setSearch(search);
        fetch(`/api/coffee/search/${search}`)
            .then(res => res.json())
            .then(data => setDropdown(data));
    };

    return (
        <div className={styles.searchBar}>
            <input
                className={styles.input}
                type="text"
                placeholder="Coffee Name"
                value={search}
                onChange={e => handleSetSearch(e)}
            />
            {search.length > 0 && (
                <span onClick={clearSearch} className={styles.searchBtn}>
                    <i className="fa-solid fa-x"></i>
                </span>
            )}
            {dropdown.length > 0 && (
                <div className={styles.dropdown}>
                    {dropdown.map((item: Coffee) => (
                        <div
                            key={item.id}
                            className={styles.dropdownItem}
                            onClick={() => handleSearch(item.name)}>
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
