import React, { Component } from "react";
import SearchForm from "../SearchForm";
import ResultList from "../ResultList";
import API from "../../utils/API";

import Jumbotron from "../Jumbotron";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    };

    // When this component mounts, Search for this book
    componentDidMount() {
        this.searchBooks("Coding");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    testEvent = () => {
        // event.preventDefault();
        console.log("test hit")
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <SearchForm
                        search={this.state.search}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                </Jumbotron>
                <Jumbotron>
                    <ResultList results={this.state.results} />
                </Jumbotron>
            </div>
        );
    }
}

export default SearchResultContainer;
