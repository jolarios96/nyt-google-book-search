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

    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        this.searchBooks("Eragon");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const input = event.target.input;
        const value = event.target.value;
        this.setState({
            [input]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

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
