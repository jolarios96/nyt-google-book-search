import React from "react";
import Jumbotron from "../Jumbotron";

function Form() {
    return (
        <Jumbotron>
            <form className="form-inline">
                <input type="text" className="form-control w-100 mb-4" id="searchInput" placeholder="Title, Author" />
                <button type="submit" className="btn btn-primary w-100">Search</button>
            </form>
        </Jumbotron>
    );
}

export default Form;