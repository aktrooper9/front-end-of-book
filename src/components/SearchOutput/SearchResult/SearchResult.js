import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.MRData} style={{borderRadius: 50 + "px", margin: "auto", background: "#A9A9A9", paddingTop: 1 + "em", paddingBottom: 1 + "em", marginBottom: 1 + "em", width: 50 + "%"}}>
            <h1>{props.name}</h1>
            <h4>Nationality: {props.nationality}</h4>
            <a href={props.url} rel="noopener noreferrer" target="_blank">{props.url}</a>
        </article>
    );
}

export default SearchResult;