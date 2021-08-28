import React from 'react'
import './Search.css'

const Search = (props) => {
    return (
        <form autocomplete="off" className="search-form" onSubmit={(e) => props.onSubmit(e)}>
            <input
                className="searchbar"
                // value={props.value}
                // onChange={(e) => props.onChange(e)}
                name="Search"
                placeholder="Search"
                type="text"
                autoFocus
        />
        <button className="search-button">Go</button>
        </form>
    )
}

export default Search
