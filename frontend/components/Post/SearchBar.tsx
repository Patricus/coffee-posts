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
    const [hasSearched, setHasSearched] = React.useState(false);

    const { setPosts, order } = usePost();

    const handleSearch = () => {
        if (hasSearched) {
            setHasSearched(false);
            setSearch("");
            setDropdown([]);
            fetch(`api/post?order=${order}`)
                .then(res => res.json())
                .then(data => setPosts(data));
        } else {
            setHasSearched(true);
            setDropdown([]);
            fetch(`/api/post/coffee/${search}?order=${order}`)
                .then(res => res.json())
                .then(data => setPosts(data));
        }
    };

    const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setSearch(search);
        if (search.length > 0) {
            fetch(`/api/coffee/search/${search}`)
                .then(res => res.json())
                .then(data => setDropdown(data));
        } else {
            setDropdown([]);
        }
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
            <span onClick={handleSearch} className={styles.searchBtn}>
                <i className={hasSearched ? "fa-solid fa-x" : "fa-solid fa-magnifying-glass"}></i>
            </span>
            {dropdown.length > 0 && !(dropdown.length === 1 && dropdown[0].name === search) && (
                <div className={styles.dropdown}>
                    {dropdown
                        .filter((item: Coffee) => item.name !== search)
                        .map((item: Coffee) => (
                            <div
                                key={item.id}
                                className={styles.dropdownItem}
                                onClick={() => setSearch(item.name)}>
                                {item.name}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
