import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../Spinner/Spinner";
import classes from './SearchOutput.module.css';

const SearchOutput = (props) => {
    let message = null;

//    console.log("A");
//    console.log(props);
    try {
        if (props.term && props.results[0].ConstructorTable.Constructors.length > 0) {
                message = <p>In {props.term} there were {props.results[0].ConstructorTable.Constructors.length} teams</p>;
            } else if (props.term) {
                message = <Spinner/>;
            } else if (props.term === null){
                message = "no results found";
            }
    }
    catch (e) {}

    let searchResults = null;
//    console.log("B");
//    console.log(props);
    if (props.results.length > 0) {
        searchResults =
            props.results[0].ConstructorTable.Constructors.map((c, index) => {
                return (
                    <SearchResult
                        key={index}
                        name={c.name}
                        url={c.url}
                        nationality={c.nationality}
                    />
                );
            })
    }

    return (
        <div className={classes.MRData}>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;