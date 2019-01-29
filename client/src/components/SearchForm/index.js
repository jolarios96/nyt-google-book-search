import React from "react";

function SearchForm(props) {
    return (
        <form className="form-inline">
            {/* <label htmlFor="search">Search:</label> */}
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control w-100 mb-4"
                placeholder="Title, Author"
                id="search"
            />
            <button onClick={props.handleFormSubmit} className="btn btn-primary w-100">
                Search
                </button>
        </form>
    );
}

export default SearchForm;