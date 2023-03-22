import React from "react";
import styles from "../../styles/Posts.module.css";

function SearchBar({ order, setOrder }: { order: string; setOrder: (order: string) => void }) {
    const [search, setSearch] = React.useState("");
    const [dropdown, setDropdown] = React.useState([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className={styles.searchBar}>
            <input
                className={styles.input}
                type="text"
                placeholder="Search for Coffee"
                value={search}
                onChange={e => handleSetSearch(e)}
            />
            <span className={styles.searchBtn}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>
    );
}

export default SearchBar;
