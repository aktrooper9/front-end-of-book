import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>self: {props.self}</h1>
            <h3 className={classes.next}>
                {props.next}
            </h3>
            <h3 className={classes.prev}>
                {props.prev}
            </h3>
            <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
        </article>
    );
}

export default SearchResult;