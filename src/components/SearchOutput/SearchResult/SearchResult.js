import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.MRData}>
            <hr />
            <h1>{props.name}</h1>
            <h4>Nationality: {props.nationality}</h4>
            <a href={props.url} rel="noopener noreferrer" target="_blank">{props.url}</a>
            <hr />
        </article>
    );
}

export default SearchResult;